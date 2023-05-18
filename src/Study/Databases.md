

If hash table lookup is more efficient than a binary search, then why are database indexes stored as a table for binary search lookup rather than as a persisted hash table?

Binary search allows you to quickly look up a record by its key, assuming the keys are already sorted. This is especially true if the number of keys is large. 32 key reads would be sufficient to find any single unique key within a collection of two billion sorted keys.

Binary search works this way because each search attempt cuts the number of records to search in half.

That said, databases typically use some other binary tree-like data structure such as b-trees or red-black trees to perform the indexing. Using a binary tree removes the requirement that the list of keys be sorted before searching.