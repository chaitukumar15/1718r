var express = require("express");

var bcrypt = require("bcrypt");
var connection = require("./index.js");
var app = express();

app.use(express.json());

app.post("/register", (req, res) => {
  console.log(req.body);

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.send({
        msg: err.message,
        statuscode: 400,
      });
    } else {
      req.body.password = hash;

      connection.query(
        `select *  from usersdata where user=?`,
        [req.body.user],
        (err, data) => {
          if (err) {
            res.send({ msg: err.message });
          } else {
            console.log(data);

            if (data.length > 0) {
              res.send({
                msg: "user exists already",
              });
            } else {
              connection.query(
                `
        INSERT INTO usersdata (user, password, email, dob)
        VALUES (?,?,?,?)`,
                [
                  req.body.user,
                  req.body.password,
                  req.body.email,
                  req.body.dob,
                ],
                (err, data) => {
                  if (err) {
                    res.send({
                      msg: err.message,
                      statuscode: 400,
                    });
                  } else {
                    res.send({
                      msg: "registered successfully",
                      data: data,
                      statuscode: 200,
                    });
                  }
                }
              );
            }
          }
        }
      );
    }
  });
});

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>
    <h1>hi i m res named chaitanay</h1>
</body>
</html>`);
});

app.post("/login",(req,res)=>{

    connection.query(`select *  from usersdata where user=?`,[req.body.user],(err,data)=>{

        if(err){
            res.send({
                msg:err.message,
                statuscode:400
            })
        }else{


            if(data.length>0){
            

                bcrypt.compare(req.body.password,data[0].password,(err,result)=>{
                 
                    if(err){
                        res.send({
                            msg:err.message,
                            statuscode:400
                        })
                    }else{


                        var usercheck=req.body.user==data[0].user;

                        if(usercheck && result){
                            res.send({
                                data:"success fully login",
                                code:200
                            })
                        }else{
                            res.send({
                                data:"invalid cred",
                                code:400
                            }) 
                        }
                       
                    }
    //  res.send({
    //                 msg:data,
    //                 statuscode:200
    //             })


                })

            }else{
                res.send({
                    msg:"please register and come",
                    statuscode:400
                })
            }

         


        }



    })

// res.send(req.body)


})



app.listen(3009, () => {
  console.log("hi server has been staertted");
});
