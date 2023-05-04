## React Query
- Handles caching for you
- Exists outside of just React
- Helps make fetching data testable

```
npm i @tanstack/react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
})

// Add to App chain
<QueryClientProvider client={queryClient}>
    <App />
 </QueryClientProvider>

// fetchPet.js 
 const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];

    const apiRes = await fetch('url?id=${id}');

    // Have to write a failure for ReactQuery
    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch not okay`);
    }

    //Do not have to await on the return, adds a tiny amount of latency
    return apiRes.json();
 }
 // another file
 import fetchPet from "./fetchPet";

 // This is where the fetch gets the id from. 
 // second arg is what to do if it's not found in the cache
 // Can't await inside render
 const results = useQuery(["details", id], fetchPet);   

// Tries 3 times, then responds with an error
if (results.isError) {
    // respond
}

 if (results.isLoading) {
    return (
        <div><h2>Loading</h2><div/>
    );
 } 
 // now pet has loaded
 const pet = results.data.pets[0];

 return (
    <div>
        <div>
            <h1>{pet.name}</h1>
            ...etc
        </div>
    </div>
 )

```
`Generally prefer useQuery over plain fetch`