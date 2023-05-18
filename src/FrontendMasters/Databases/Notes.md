https://btholt.github.io/complete-intro-to-databases/

Relational Databases use tables, rows, and columns. The schema is defined and structured. Alter tables are expensive and you may not be able to do it without taking down production. 

Mongo does not want one collection to refer to another collection. All of the like data should live together. It's possible, but expensive.



### Choosing a DB
- Do I have highly relational data where I'll many tables that need to join to other tables? SQL/Relational databases are probably best here
- Do I have highly unstructured data where I'll have collections of related objects that are differently shaped? Document-based databases are going to shine here
- Do I have data where I need to describe graphs of relationships? A graph database can work best here
- Do I have simple needs of just retreiving data based on keys? Key-value stores can be a primary database in these cases
- Do I have pipelines of information that need to filter, split, combined, and republished? Something like Apache Kafka could be really helpful here

### Caching
Debugging caching is hard. It adds another set of permutations to debug, so only use caching when necessary.
