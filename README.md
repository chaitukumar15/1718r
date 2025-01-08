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



 HTTP status code is a 3-digit code sent by a server in response to a client's request made to the server. It indicates the result of the request and helps to inform the client about the outcome of their request. These codes are part of the HTTP protocol, which is used for communication between a client (like a web browser) and a server




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


...................................................

routing :
the process of managing how a web application responds to URL changes and what it shows users


file  based  url


resource based url 


url module 


parse(pathname) -> will take url ->(req.url)

if(pathname=="/address"){
    send-> "hi this is address"
}else{
     send-> "hi this is other things "
}


................................................

Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features to develop both web and mobile applications. Here's a deeper dive into Express.js

rest vs soap  

Common Use Cases:
Web Apps: Building full-stack web applications with front-end frameworks (like React, Angular, or Vue) and Express for the back-end.
RESTful APIs: Creating back-end services that communicate with front-end apps, mobile devices, or other systems via HTTP.
Single-Page Applications (SPAs): Used as the back-end for SPAs, where Express handles data and client-side JavaScript handles the UI.






In web development, params (short for parameters) are values that are passed into a web application through the URL, typically in the form of query parameters or route parameters. They are used to convey information from the client to the server or between different parts of an application. These parameters allow for dynamic content and behavior based on the data sent by the client.

There are several types of parameters commonly used in web development:

1. Route Parameters
Route parameters are used within the URL path to capture values dynamically and make routes flexible. In a web application, you might define a route with placeholders that represent these parameters.
Route Parameters:
Are defined within the route path.
Allow you to capture and use dynamic data in the URL.
Are accessed through req.params in Express.js or other server frameworks.

2. Query Parameters
Query parameters are passed at the end of the URL after a question mark (?) and are used to pass small amounts of data. Query parameters are often used for filtering, pagination, or search.

URL with Query Parameters: /search?query=javascript&limit=10


3. Body Parameters (in POST requests)
When submitting data via a POST request (often used for submitting forms or sending JSON data), parameters are sent in the request body rather than the URL.

In HTML forms, data is often sent as body parameters with application/x-www-form-urlencoded or multipart/form-data encoding.
In APIs, data is typically sent as JSON or XML in the request body.

Body Parameters:
Are typically sent in the body of POST, PUT, or PATCH requests.
Can contain complex data (e.g., objects, arrays).
Can be accessed through req.body in Express.js.


4. Header Parameters
Header parameters are part of the HTTP request headers. They are often used for passing authentication tokens, content type information, and other meta-data that should not be included in the URL or body.

Header Parameters:
Are part of the HTTP request headers.
Are commonly used for authentication, content negotiation, and meta-data.




..........................


var express=require("express");


var app=express();

app.get("/",()=>{


})

app.get("/products",()=>{

})

app.listen(3000,()=>{
     
})


..................

mysql2

npm install mysql2

connected=mysql.createConnection({
        host: 'localhost',      // Replace with your database host
        user: 'yourUsername',   // Replace with your database username
        password: 'yourPassword', // Replace with your password
        database: 'yourDatabase' // Replace with your database name
    });

connected.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to mysql");
  }
});

connected.query("SELECT * FROM dummy.users",(err,data)=>{
  console.log(data);
  
})


Prevents SQL Injection:

SQL injection is a major security vulnerability where an attacker can manipulate the SQL query by injecting malicious code. This can lead to unauthorized access, data leaks, or even deletion of data.
Using the ? placeholder ensures that the values you insert into the query are treated as data rather than part of the SQL syntax. The library automatically escapes and sanitizes the values to prevent malicious code from being executed.


const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;


SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = 'anything'


Improves Code Readability


Makes Queries More Efficient


Improves Code Readability


jsonwebtoken

{ expiresIn: '1h'/"1s" }

const token = jwt.sign(payload, secretKey);

const decoded = jwt.verify(token, secretKey);
................................................


mail-> 

gmail -> 
manage ur account 
->
security 
->
two factor authantication 
->
app pass-> 

project -> 
app passsword 

...................


 1. host: 'smtp.gmail.com'`
   - Definition: The `host` option specifies the address of the SMTP server that you will be using to send emails.
   - In this case: `smtp.gmail.com` is the SMTP server address used by Gmail's email service. This is where you connect to send emails via Gmail.
   - Why: By using this address, you can send emails from your Gmail account.

 2. port: 587`
   - Definition: The `port` option specifies the port on the SMTP server to connect to. SMTP (Simple Mail Transfer Protocol) is used for sending emails.
   - Common Gmail SMTP ports:
     - `587`: This is the most commonly used port for sending email over TLS (Transport Layer Security), which is a more secure connection. It's commonly used with the `secure: false` setting, which means the connection starts as unencrypted and then switches to TLS.
     - `465`: This port is used for SMTP over SSL (Secure Sockets Layer), which is a fully encrypted connection from the beginning.
     - `25`: This is another SMTP port, but it's generally blocked by ISPs and not recommended for use because of its association with spam.
   - Why: Gmail recommends using port `587` with `secure: false` for connections that are upgraded to a secure connection after the initial handshake (using STARTTLS).

 3. secure: false`
   - Definition: The `secure` option controls whether the connection should be encrypted from the start using SSL/TLS. 
     - If `secure` is set to `true`, the connection is fully encrypted from the beginning (SSL).
     - If `secure` is set to `false`, the connection is not encrypted initially, but it can be upgraded to a secure connection using the `STARTTLS` protocol.
   - For port `587`: The `secure: false` setting is appropriate for port `587`, because the connection starts unencrypted but switches to a secure connection once the server supports it (via the `STARTTLS` protocol).
   - For port `465`: If you were to use port `465`, you would set `secure: true`, as this port requires SSL encryption from the start.

 Example Configuration for Sending Email via Gmail:

```javascript
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // The SMTP server for Gmail
  port: 587,               // Port 587 for TLS connections
  secure: false,           // Use false for TLS (true would be for SSL on port 465)
  auth: {
    user: 'your-email@gmail.com',  // Your Gmail address
    pass: 'your-app-password'      // Use an App Password if 2FA is enabled
  }
});
```

 Summary:
- host: 'smtp.gmail.com'`: Connects to Gmail's SMTP server.
- port: 587`: Specifies the port for sending email using TLS encryption after an initial handshake.
- secure: false`: Disables SSL encryption from the start but allows for a secure connection after upgrading with `STARTTLS`.

 When to Use SSL (`secure: true`):
- If you're using port 465, you should set `secure: true` to start with SSL encryption. However, Gmail recommends using port `587` with `secure: false` because it uses `STARTTLS` to secure the connection.

 Recap of the Ports:
- Port 587 (secure, uses `STARTTLS`): `secure: false` (Gmail's preferred port for outgoing mail).
- Port 465 (SSL encryption from the start): `secure: true`.
- Port 25: Generally avoided due to being blocked by many ISPs.



..............................

const crypto = require('crypto');

// Generate a random 256-bit (32-byte) key for HMAC
const secretKey = crypto.randomBytes(32).toString('hex'); // Converts the bytes to a hexadecimal string

console.log('Generated Secret Key:', secretKey);