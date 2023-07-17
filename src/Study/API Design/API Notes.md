https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/

GET /articles/ for getting news articles
POST /articles/ is for adding a new article
PUT /articles/:id is for updating the article with the given id. 
DELETE /articles/:id is for deleting an existing article with the given ID.

GET /articles/:articleId/comments for getting comments for article X

For example, suppose you wanted to return the author of particular comments. You could use /articles/:articleId/comments/:commentId/author. But that’s getting out of hand. Instead, return the URI for that particular user within the JSON response instead:

"author": "/users/:userId"

Articles
{ ArticleId, Header, Body, Footer }

Comments
{ ArticleId, Comments (JSON or junction table)}

GET /articles/:articleId/comments for getting comments for article X


`200 OK: The request succeeded.`

`201 Created: The request succeeded and a resource was created.`

`400 Bad Request: The request was not fulfilled due to an error in the request, such as a typo or missing data.`

`401 Unauthorized: The request was not fulfilled because the client is not authenticated or authorized to access the requested resource.`

`403 Forbidden: The request was not fulfilled because the client is authenticated, but not authorized to access the requested resource.`

`404 Not Found: The request was not fulfilled because the server could not locate the requested resource.`

`500 Internal Server Error: The request was not fulfilled due to an unexpected problem with the server.`

`502 Bad Gateway: The request was not fulfilled due to an invalid response from an upstream server.`

`503 Service Unavailable: The server was unable to process the request due to maintenance, overloading, or another temporary interference.`