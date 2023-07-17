
# General DB info
https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5

### Indexing 
Allows for faster retrieval for specific information, but the ordering matters. When using a wildcard, the wildcard must be on the right side of the query, and we can use reverse to address that: 

`SELECT email_address FROM customers WHERE reverse(email_address) LIKE reverse('%@wikipedia.org');`

### One-to-many
Suppliers {Supplied ID, Company Name} -> Products {Product ID, Name, Supplier}

### Many-to-many relationships
Create a junction table
Orders (OrderId), Products (ProductId)
-> Order Details (OrderId, ProductId)

### One-to-One
Product {ProductId, (Other info for 1-M or M-M relationships) -> ProductInfo {ProductId, Size, Region, Language}
We could also fill in this other info into product, but it would add a lot of columns that may be empty. A JSON column could also potentially work. 

### DB workings
If hash table lookup is more efficient than a binary search, then why are database indexes stored as a table for binary search lookup rather than as a persisted hash table?

Binary search allows you to quickly look up a record by its key, assuming the keys are already sorted. This is especially true if the number of keys is large. 32 key reads would be sufficient to find any single unique key within a collection of two billion sorted keys.

Binary search works this way because each search attempt cuts the number of records to search in half.

That said, databases typically use some other binary tree-like data structure such as b-trees or red-black trees to perform the indexing. Using a binary tree removes the requirement that the list of keys be sorted before searching.