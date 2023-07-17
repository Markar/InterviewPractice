## Ben Elliot - 6/29/2023

### What concerns do you have about consuming this api? 
    (API is the list of all pokemon from the pokedex on pokemon.com)

Mentioned
- JSON Schema change
- No visible versioning
- The API could go down, should keep a copy on the web server 
- Performance may be slow with large data, should cache locally on the client

### With a legacy system and a new system (both server side rendered) how would you handle the migration incrementally so that users can be routed to pages in both the new and old system

- I talked mostly about using different routing strategies in the middleware by combining the apps. 
- I also mentioned the functionality for an iframe, but couldn't remember the term
- He wanted to talk about using lambdas to run server side rendered pages, and I said I think lambdas operate on query params, so we would want to convert the old code into restful endpoints that the lambdas can pass their information to.

