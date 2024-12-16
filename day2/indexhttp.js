var http = require("http");

var server = http.createServer(async(req, res) => {

    
if(req.method=="GET"){

    var a=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 style="color: red;">hello</h1>
</body>
</html>`
res.write(a);
res.end()
    
}else if(req.method=="POST"){
    var data =await fetch("https://fakestoreapi.com/products");

    var dataread=await data.json()
  
    res.write(JSON.stringify(dataread));
  
    res.end();
}
  else{
    res.write("kajhdacjhshjdcfhjwdg");

    res.end();

  }


});

var port = 3000;
server.listen(port, () => {
  console.log("hi started the server http://localhost:" + port);
});
