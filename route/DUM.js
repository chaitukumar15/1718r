var express=require("express");

var app= express();

app.use(express.json())

app.use(express.urlencoded({extended:true}))

// console.log(app);

app.use((req,res,next)=>{
console.log("hello");
next();
})

app.get("/",(req,res)=>{
    
console.log(req.body);

    res.send(req.body)
})


app.listen(3003,()=>{
    console.log("server ");
    
})
