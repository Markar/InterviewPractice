// This is a bit contrived example. Normally these would be separated amongst a bunch of files.

// Imagine our verySlowAndExpensiveFunction is something we're trying to call as infrequently as
//  possible. In this case we're just having it wait and then resolve a promise but imagine it was an
//   expensive database query or a call to an expensive-to-call API endpoint
// cache is a generic caching function. With this you could cache anything. 
// All it does is take in a redis key, how long to cache it, and some function to call 
// when it doesn't find the item in the cache. It returns a function that makes it seamless to the call
//  point: either it will immediately give you back what's in the cache or it will make you wait for
//   the result of the verySlowAndExpensiveFunction.

// This definitely has thundering herd potential. What would be better is to have a
//  second lock key that says "hey, we're already trying to calculate/retrieve this answer." 
//  Then you can either have the backend poll that key for an answer or you could return a
//   503 to the frontend and have a frontend that will poll until the 503 clears. 
//   Lots of ways to handle this.


// under rIncr
const rGet = promisify(client.get).bind(client);
const rSetex = promisify(client.setex).bind(client);

function cache(key, ttl, slowFn) {
  return async function (...props) {
    const cachedResponse = await rGet(key);
    if (cachedResponse) {
      return cachedResponse;
    }
    const result = await slowFn(...props);
    await rSetex(key, ttl, result);
    return result;
  };
}

async function verySlowAndExpensiveFunction() {
  // imagine this is like a really big join on PostgreSQL
  // or a call to an expensive API

  console.log("oh no an expensive call!");
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().toUTCString());
    }, 5000);
  });

  return p;
}

const cachedFn = cache("expensive_call", 10, verySlowAndExpensiveFunction);

// inside init, under app.get pageviews
app.get("/get", async (req, res) => {
  const data = await cachedFn();

  res.json({
    data,
    status: "ok",
  });
});