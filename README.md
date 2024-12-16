# 1718r
node js class notes and code 

module:
A module in Node.js is a collection of JavaScript functions and objects that can be used by other programs or modules. Modules are similar to JavaScript libraries and can be used to:
Create reusable code->
Modules can be used in many programs, helping developers adhere to the DRY (Don't Repeat Yourself) principle.
Break down complex logic->
Modules can help break down complex logic into smaller, more manageable chunks.
Share code-> 
Modules can be shared with other developers, contributing to the Node.js community



1.core modules-> 
http 
os 
path
fs 
2.local modules->
user defined modules 






module.exports for export 
require() for import 

if u use es6 modules -> 
a. using extention mjs 
b. or type="module " in pacage.json file

3. third party modules :

express , mysql2 , bcrypt , nodemailer , .....




....................................................

Overview of the HTTP Module
1.	Core Module: The HTTP module is built into Node.js, so you don’t need to install any additional packages.
2.	Creating Servers and Clients: It provides functionality to create web servers that can handle incoming requests and send responses.
Basic Concepts
1.	Server: A Node.js application that listens for HTTP requests and sends responses.
2.	Client: The entity (like a web browser) that makes HTTP requests to the server


var http=require("http");

var server=http.createserver((req,res)=>{

});


server.listen(port,cb)


....................................

 1. json-server 

 post/
 http://localhost:3000/post

 get - > retrive values from db.json 

 post - > create a new record 

 put -> 

 patch -> 

 delete -> 


 http://localhost:3000 


http methods ->
HTTP (Hypertext Transfer Protocol) defines a set of request methods to indicate the desired action to be performed on a given resource. These methods are also known as HTTP verbs and are case-sensitive.

get  -> chaitanya getting the data 
post -> chaitanya posting the data 
put  -> chaitanya putting the data 
patch  -> chaitanya patched the data 
delete -> chaitanya deleted the data 



http://localhost:3000/products -> 



n HTTP status code is a 3-digit code sent by a server in response to a client's request made to the server. It indicates the result of the request and helps to inform the client about the outcome of their request. These codes are part of the HTTP protocol, which is used for communication between a client (like a web browser) and a server


HTTP status codes are grouped into five categories based on the first digit of the code:

1xx (Informational): These codes indicate that the request was received and is being processed.

Example: 100 Continue — The server has received the request headers and the client should proceed to send the request body.
2xx (Successful): These codes indicate that the request was successfully received, understood, and accepted by the server.

Example: 200 OK — The request was successful, and the server has returned the requested resource.
3xx (Redirection): These codes indicate that further action is needed to complete the request, typically by redirecting the client to another URL.

Example: 301 Moved Permanently — The requested resource has been permanently moved to a new URL.
4xx (Client Error): These codes indicate that there was an error with the client’s request, such as incorrect syntax or invalid data.

Example: 404 Not Found — The requested resource could not be found on the server.
5xx (Server Error): These codes indicate that the server failed to fulfill a valid request, usually due to an error on the server's side.

Example: 500 Internal Server Error — The server encountered an unexpected condition that prevented it from fulfilling the request.