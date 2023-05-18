# Key-Value Stores
 - Not used as a primary database. 
 - Highly scalable.

### Use cases
- Caching
- Session data, or any non-essential data that is frequently used, but can be lost. 
- Analytics or telemtry

### Varieties
- Postgres hstore
    - Not as useful for high volume, like sessions. Good for key/value paradigm.
- Memcached 
    - Only writes strings
- Redis (Remote dictionary server) 
    - Writes multiple object types, and works in clusters


### Redis
- Offered by many cloud platforms, including AWS
- Used with other Dbs, like Mongo or Postgres
- Assign key/value pairs with a colon, user:markwidgren
- Other delimiters work, but colon is the standard

Example: Tracking page views
```
SET visits 0
INCR visits
DECR visits
GET visits
```
### Namespaces
Example:
```
SET user:btholt:city Seattle
SET user:sarah_edo:city Denver
SET user:1marc:city Minneapolis
GET user:btholt:city
// "Seattle"
```

Banning photos
- You can use binaries are keys, but don't use large sizes
- Instead, hash (md5) of the photo, use that as a key

Math
```
set visits 0
incr visits
set score:seahawks 0
set score:broncos 0
// Later in the game, increment score by 6
incrby score:seahawks 6
// get
mset score:seahawks 43 score:broncos 8
mget score:seahawks score:broncos
// check exists
exists score:seahawks
exists score:vikings
// pathfinding
exists plane:0:0
// 1
exists plane:0:1
// 0
// delete item
del score:seahawks
```

When would you use Redis instead of using memory on your app server?
- Endpoints should be stateless
- This is helpful for multiple servers. One app server will work the same way, aside from memory available.

### Command Options
XX and NX operators, not very useful, but NX = !exists
```
exists color
// 0

set color blue XX
// nil, color doesn't exist yet

set color blue NX
// OK, doesn't exists yet
get color
// blue

set color green XX

get plane:0:0
// visited
```

### TTLs
- These also work in other DBs, but commonly used in Redis
- EX, Uses seconds
- PX, uses milliseconds
- Thundering herd
    - Cache expires, and before you can refresh it, everyone hits your database instead of the cache. This can be avoided by not using TTLs with caches. Use a chronjob to reset the cache rather than the app server.
- By default, everything is a string. 
    - Math ops will return an integer, but it's actually still a string when you retrieve it.
- Strings, lists, sets, sorted sets, hashes, hyperlog logs, streams, 
```
// Deletes itself in 5 hours
set fitness:total:btholt 750kj EX 3600
```
### Data types
- RPUSH: pushes onto the stack (arrays)
```
RPUSH notifications:btholt "Call your mom" "Feed the dog" "Take out the trash"

LRANGE notifications:btholt 0 -1 // Start from 0, go to the end
LRANGE notifications:btholt 0 -2 //2 from the end
LRANGE notifications:btholt 0 3 //To the third index

RPOP notifications:btholt
LRANGE notifications:btholt 0 -1 // Start from 0, go to the end
// call mom, feed dog
LPOP notifications:btholt
// feed dog
LTRIM / RTRIM // multiple items
```

### Hashes
Hashes are like an object in Redis
- HMSET
- HGET
```
HMSET btholt:profile title "principal program manager" company "Microsoft" city "Seattle" state "WA"
HGET btholt:profile city
HGETALL btholt:profile // comes back as a list
```

### Sets
Good for allow/ban lists
```
SADD colors red blue green
SISMEMBER colors green
SMEMBERS colors
SPOP colors // returns random color

// Ordered sets: could implement a priority queue
ZADD ordinals 3 third
ZADD ordinals 1 first
ZADD ordinals 2 second
ZADD ordinals 10 tenth
ZRANGE ordinals 0 -1

returns 1/2/3/4 in order
```

### HyperLogLog
Lower margin of error. 
Redis implementation of bloom filters.
Useful for recommendation systems, like recommending a new song/book/item.
### Streams 
Pub/sub for Redis.
Logging would be a good example.

## Advanced concepts
Redis can evaluate Lua, but probably better to do this in the backend
```
EVAL "for i = 0, 9, 1 do redis.call('SET', 'lua_key_' .. i, i * 5) end" 0
```
### Pub/Sub
- Useful for real time notifications

### Transactions
- Multi, exec, discard, watch

### LRU
Allows Redis to act like Memcached. You provide a limit of memory, and Redis will evict entries by least recently used. 

The first thing you would do is set how big you want Redis to get. 100MB, 1GB, 10GB, whatever you have space for. Then in your code you first check to see if the request URL is in the cache. If it is, serve it, if it's not, find in it in the other database, write it to Redis, and serve it to the user. Then Redis, once it reached its space limit, when you wrote to it would evict the least recently used key. The idea is that you will keep the most used keys easily since those users will be using them a lot and users who rarely use it will just have to hit the database and therefore you'll maximize your cache hits!


### Redis Ops
This would be the DBA responsibilities.
- master/slave -> leader/follower (replicas)
- The leader server will accept all writes and then write those out to the followers so that all followers are exact replicas of the leader. 
- By default, Redis uses eventual consistency because it's fast. You can force Redis to write to the leader and all followers before it will finish writing.
- Redis clusters allow for sharding, similar to the other databases.
- Redis sental is a service that monitors the health of all Redis servers, and will notify you if a server is unhealthy. This is called self-healing or highly available service. It can even kick off a new deploy of a new Redis server, restore itself from Redis, and automatically start serving traffic.
