### Restful API Design
https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design

# Prefer mapping to individual resources and making sequential calls
![alt text](./API%20Example.png)

https://adventure-works.com/customers/1/orders
https://adventure-works.com/orders/99/products

- Make a request to the first URI to get custom 1's orders
- Then use that order info to make a request for order 99's products

# Avoid requiring resource URIs more complex than collection/item/collection.
https://adventure-works.com/customers/1/orders/99/products

# Avoid chatty APIs
IO is expensive, so avoid chaining too many calls, but balance this with the frequency of individual resources. 
If user name is required on its own, supply that as an endpoint. If the whole user object is required, then avoid
splitting that into separate endpoints.

## Versioning

# URI Versioning
# This requires the web API to maintain multiple versions of the same resource
https://adventure-works.com/v2/customers/3

{"id":3,"name":"Contoso LLC","dateCreated":"2014-09-04T12:11:38.0376089Z","address":{"streetAddress":"1 Microsoft Way","city":"Redmond","state":"WA","zipCode":98053}}

## Query string versioning
# This should default to version 1, and allows new versions to access the same resource. 
# Depends on the endpoint to return back the right response
https://adventure-works.com/customers/3?version=2

## Header versioning
# Requires the client to supply the header
GET https://adventure-works.com/customers/3 HTTP/1.1
Custom-Header: api-version=1

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"id":3,"name":"Contoso LLC","address":"1 Microsoft Way Redmond WA 98053"}