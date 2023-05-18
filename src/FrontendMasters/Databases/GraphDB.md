# Graph Databases
Good for social networks. Usually used with another database, uses Cypher as the query language, and Nodes instead of tables. Comes with a built in browser that runs on localhost. The browser handles visualizations that would be hard to see in the command line. 

- A movie will have many actors and actresses, and one or more directors while the actors, actresses, and directors will all likely have been in more than one movies. Some people have done both acting and directing. This is where a graph database can come in super handy.

### Nodes / Entities
- A node represents an entity: a movie or a person, with labels to denote those. A person could have a label of Person and/or labels for Actor and Director.  

- Our example is going to be employees and employers. So a place of work would have a Company label and people could have a Person label.

### Relationships / Edges
- Nodes can have relationships between each other. Companies EMPLOYED people or CONTRACTED with them, people MANAGED other people or WERE_PEERS with each other. Many of these relationships have a direction liked MANAGED, other are more biredirectional like WERE_PEERS. In Neo4j every relationship has a direction but sometimes you can just ignore it like in the case of WERE_PEERS. Other times you need two relationships to between nodes to describe adequately the graph. A good example is if you were describing who loved who in a play: if Taylor loved Sue, it wouldn't mean that Sue also loved Taylor. You'd need a relationship in both directions.

- Neo4j calls these connections relationships but know that lots of graphs will call these edges.

- Nodes can have a relationship with themselves. If Taylor loves herself and we want to express that, she could have a self-referential relationship of love.

### Properties
- Both nodes and relationships have properties. These would be like fields or columns. For an employee it might be their full name, location, etc. For a company it could be its location, business type, and other things like that.


- path
- shortestPath


### Recommendation Algorithm
Useful for things like Spotify or Netflix, where you want to suggest things that a user may like, based on other things they like or other things their friends like who like similar things. 