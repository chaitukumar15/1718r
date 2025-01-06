var mysql2=require("mysql2");

var connection =mysql2.createConnection({

    host:"localhost",
    user:"root",
    password:"chaitu1504",
    database:"dummy"
})


connection.connect((err)=>{

    if(err){
        console.log(err);
        
    }else{
        console.log("hi connected to mysql");
        
    }

})



module.exports=connection;
