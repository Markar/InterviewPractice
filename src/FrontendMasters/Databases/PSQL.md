# Postgres Specific

pgAdmin for gui

JSON in Postgres
- Useful when you have a lot of data associated with one thing, and do not want to make a table for each thing.

Querying syntax
```
// Casting
SELECT distinct CAST(content -> 'type' AS TEXT) AS content_type FROM rich_content;

// Does the same thing
SELECT DISTINCT content ->> 'type' FROM rich_content;
```

EXPLAIN 
- Shows the execution info about the query
- Compare the cost to decide what queries to index
`CREATE INDEX ON comments (board_id);`

Parameterized Queries
- Help prevent SQL injection
- SELECT ... $1", [search]

# Hasura
GraphQL - PSQL 
