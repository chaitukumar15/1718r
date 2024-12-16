var http=require("http");

var server = http.createServer((req,res)=>{

    console.log(req.method);

    if(req.method=="GET"){

        res.statusCode=400;
        res.write("chaitanya getting the data "); 
    }else if(req.method=="POST"){
        res.statusCode=503;
        res.write("chaitanya posting the data "); 
    }else if(req.method=="PUT"){
        res.write("chaitanya puting the data")
    }
    else if(req.method=="PATCH"){
        res.write("chaitanya patching the data")}
        else if(req.method=="DELETE"){
        res.write("chaitanya deleting the data")
        }
    else{
        res.write("chaitanya ur not doing anything "); 
    }
    

// res.write("hi this is chaitanya");

    res.end()

})


var port=3000;
server.listen(port,()=>{
    console.log("server started ");
    
})