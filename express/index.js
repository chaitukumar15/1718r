var express=require("express");

var app=express();

// console.log(app);

app.get("/",(req,res)=>{
res.send("hi this is exxpress");
})

app.get("/products/:id",(req,res)=>{



    // log\

//   fetch("https://fakestoreapi.com/products").then((result)=>{

//     return result.json()
//     // res.send("hi this is products");
//   }).then((result1)=>{
//       if(req.query.cat=="m"){
//         var red=result1.filter((val,ind)=>{


//            return val.category=="women's clothing"
        
//         })
        
//             res.send(red)
//       }else{
//         var redg=result1.filter((val,ind)=>{


//            return val.category=="men's clothing"
        
//         })
        
//             res.send(redg)
//       }

//   })


res.send({
    params:req.params.id,
    query:req.query
})

    })






app.post("/",(req,res)=>{
    res.send("hi this is posdt in exxpress");
    })


app.listen(3005,()=>{
console.log("hi logged server");

})
