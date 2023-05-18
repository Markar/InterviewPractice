### SQL Commands

`CREATE DATABASE message_boards;`

Connect - \ commands are admin commands
\c message_boards;

\d shows tables in the database

\? shows available admin commands

\h available queries

-- Writes a comment

Create table
```
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (25 ) UNIQUE NOT NULL,
    email VARCHAR ( 50 ) UNIQUE NOT NULL,
    full_name VARCHAR ( 100 ) NOT NULL,
    last_login TIMESTAMP,
    created_on TIMESTAMP NOT NULL    
);
```
Insert data
```
INSERT INTO users ( username, email, full_name, created_on) 
    VALUES ( 'btholt', 'lol@example.com', 'Brian Holt', NOW());
```
Get data
```
SELECT * FROM users;
SELECT username, full_name FROM users;
SELECT username, full_name FROM users LIMIT 5;
SELECT username, full_name, user_id FROM users WHERE user_id=150;

SELECT username, full_name, user_id FROM users WHERE last_login IS NULL AND created_on < NOW() AND NOW() - interval '6 months' LIMIT 10;

// Ascending
SELECT username, created_on FROM users ORDER BY created_on LIMIT 5;

// Descending
SELECT username, created_on FROM users ORDER BY created_on DESC LIMIT 5;

//Count
SELECT COUNT(*) FROM users;

// Update and return the updated value
UPDATE users SET last_login=NOW() WHERE user_id=1 RETURNING *;

// Delete
DELETE FROM users WHERE user_id=1000;
```
### Foreign Keys

- ON DELETE CASCADE
- ON DELETE SET NULL
- ON DELETE NO ACTION
```
CREATE TABLE users (
  user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 25 ) UNIQUE NOT NULL,
  email VARCHAR ( 50 ) UNIQUE NOT NULL,
  full_name VARCHAR ( 100 ) NOT NULL,
  last_login TIMESTAMP,
  created_on TIMESTAMP NOT NULL
);

CREATE TABLE boards (
  board_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  board_name VARCHAR ( 50 ) UNIQUE NOT NULL,
  board_description TEXT NOT NULL
);

CREATE TABLE comments (
  comment_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
  board_id INT REFERENCES boards(board_id) ON DELETE CASCADE,
  comment TEXT NOT NULL,
  time TIMESTAMP
);
```

SQL Joins
```
// This lets you return the first 20 characters of a string, and AS names it
SELECT comment_id, user_id, LEFT(comment, 20) AS preview FROM comments WHERE board_id = 39;

// Inner Join
SELECT
  comment_id, comments.user_id, users.username, time, LEFT(comment, 20) AS preview
FROM
  comments
INNER JOIN
  users
ON
  comments.user_id = users.user_id
WHERE
  board_id = 39;
```

Inner join
- Only includes the overlap. Must have a match, or don't include it.
- Comment without user, drop the comment. If user id is null, not included.

Left join
- Comments without users, left join would include this. 

Right join
- Grab boards without any comments

### Subqueries
Let's say you need to find all the comments made by Maynord Simonich. You could make two queries: query for Kate's user_id from users, and then use that user_id to query comments. Or we could do it all at once with a subquery!

`SELECT comment_id, user_id, LEFT(comment, 20) FROM comments WHERE user_id = (SELECT user_id FROM users WHERE full_name = 'Maynord Simonich');`

This will query for Maynord's ID and immediately use that in the other query. Make sure this returns exactly one row or this will fail. You can use subqueries in a variety of ways but it generally looks like this with () surrounding the subqueries. You can even have subqueries in your subqueries!

### Group By

Show top ten most posted-to message boards
```
SELECT
  boards.board_name, COUNT(*) AS comment_count
FROM
  comments
INNER JOIN
  boards
ON
  boards.board_id = comments.board_id
GROUP BY
  boards.board_name
ORDER BY
  comment_count DESC
LIMIT 10;
```