# Databases
### ACID
- Atomicity
    - The query has to happen in one transaction, not in parts.
- Consistency
    - Multiple databases need to be consistent. If we have downtime, we need to make sure the transaction occurred on all databases.
- Isolation
    - We can have a multi-threaded db, but it needs to work the same in parallel/sequentially
- Durability
    - If the server crashes, we can restore it to where it was.

Know what trade offs you make. ACID is reliable, but slow. Some applications have acceptable data loss.

### Transactions
Allows you to group queries. All or nothing happens during a transactions.

# NoSQL
Non-relational databases, aka "Document database"

No schema, so the mental model works well with dynamically typed languages. 

## MongoDB
One entry is a document/row/record, "documents in a collection"

### Commands
show dbs;
- list of databases

use adoption;
- This will create the adoption database if it doesn't exist, and switch to it

db.pets.insertOne({ name: "Luna", type: "dog", breed: "Havanese", age: 8 })
- This inserts that json object into the pets db

db.pets.count()

db.stats()

db.pets.findOne({ type: "dog", age: 9})

db.pets.find({ type: "dog", age: 9}).limit(5)

db.pets.find({ type: "dog", age: 9}).limit(5).toArray()

greater than= $gt, greater than equals= $gte, not equal = $ne
db.pets.count({ type: "cat", age: { $gt: 12 }});
db.pets.count({ type: "cat", age: { $gte: 12 }});

### Logical operators
and, or, not
db.pets.count( { type: "bird", $and: [{ age: {$gte: 4}}, {age: {$lte: 8}}]})

age: 1 / age: -1, ascending/descening
- db.pets.find( {type: "dog"}).sort({ age: 1}).limit(5)
- db.pets.find( {type: "dog"}).sort({ age: 1, breed: 1}).limit(5)

### Projections
All we get back here is what we specify. Here we only get the name. 
- db.pets.find( {type: "dog"}, {name: 1, breed: true }).limit(5)
- pass _id: 0 if you don't want to include the _id 

## Updating MongoDB
insert, insertOne, insertMany
```
db.pets.updateOne(    
    { type: "dog", name: "Luna", breed: "Havanese" },    
    { $set: { owner: "Brian Holt" }}
);
```

Look up these update operators: $currentDate, $inc, $min, $max, $mul, $rename, $set, $setOnInsert, $unset
```
db.pets.updateMany(    
    { type: "dog" },    
    { $inc:  {age: 1}}
);
```

Returns a matchedCount and modifiedCount

### Upsert
We have to provide the full object to set for elements that are not found
```
db.pets.updateOne(
    { type: "dog", name: "Sudo", breed: "Wheaten" },
    { $set: {type:"dog", name: "Sudo", breed: "Wheaten", age: 5, index: 20000, owner: "Sarah Drasner" } }
    { upsert: true, }
)
```
Deletes
```
db.pets.deleteOne({ type: "reptile", breed: "Havanese" });

db.pets.deleteMany({ type: "reptile", breed: "Havanese" });

// This one returns the object and then deletes it
db.pets.findOneAndDelete({ type: "reptile", name: "Fido" });
```

## Indexing
This returns a queryPlanner
- `db.pets.find( {name: "Fido }).explain("executionStats")`
- Look at the winningPlan, which returns how the execution operated
```
"winningPlan" :{
    "stage": "COLLSCAN"
    "filter": {
        "name": {
            "$eq": "Fido"
        }
    },
    "direction": "forward"
}
```
- Avoid COLLCAN if this is used more than once a day
- `db.pets.createIndex( {name: 1});`
- This will return "FETCH" in the winningPlan, but applying these can take a long time or take down the db so don't do this on production. 

Compound Indexes
- Wait until you need the performance. Indexes take up space, make sure they're being used regularly. 
Unique index
- `db.pets.createIndex({ index: 1}, {unique: true})`

Full text search
- You can only have one full text index per collection
- Basic query: `db.pets.createIndex({ type: "text", breed: "text", name: "text" });`
- Now you can do `db.pets.find({ $text: { $search: "dog havanese luna"  }})`
 
 By default these are not sorted. 
- Add sort:  `({ $text: { $search: "dog havanese luna"  }}).sort({ score: { $meta: "textScore" }})`
- Language aware, so it will drop "stop words" like is, and, or, etc. Can configure neutral, or specify the language as well.

Aggregation
- ObjectId hash contains the creation time, and you can pull that out
- Aggregation pipeline and map reduce for older dbs
- Multiple stages: bucketing, 

How do we figure out all of the senior dogs? 
- https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/
```
db.pets.aggregate([
  {
    $match: {
      type: "dog",
    },
  },
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [0, 3, 9, 15],
      default: "very senior",
      output: {
        count: { $sum: 1 },
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
]);
```

Write a NodeJS app with MongoDB
- Mongoose is an ORM for Node/Mongo
