var express = require("express");

var connect = require("../dataconnect/index.js");

var jsonwebtoken = require("jsonwebtoken");

var seckey = "abcgdeghijklmnopqrst0123456789";

var app = express();

app.use(express.json());

app.post("/reg", (req, res) => {
  var qury = `INSERT INTO users1 (username, password, email, role) VALUES (?,?,?,?)`;

  var { username, password, email, role } = req.body;

  connect.query(qury, [username, password, email, role], (err, data) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(data);
    }
  });
});

app.post("/login", (req, res) => {
  var query = "select * from users1 where username = ? ";
  var { user, password } = req.body;

  connect.query(query, [user], (err, data) => {
    if (err) {
      res.send(err.message);
    } else {
      if (data.length > 0) {
        if (data[0].password == password) {
          var token = jsonwebtoken.sign({ id: data[0].id }, seckey);

          res.send({
            mag: "login successful",
            token: token,
          });
        } else {
          res.send({
            mag: "invalid cred",
          });
        }
      } else {
        res.send("please regsiter");
      }
    }
  });
});

app.get("/products", (req, res) => {


    var tokenn= req.headers["authorization"].split(" ")[1]

    console.log(tokenn);
    
       var decdata=jsonwebtoken.verify(tokenn,seckey);

       console.log(decdata.id);

       var query = "select * from users1 where id = ? ";

       connect.query(query,[decdata.id],(err, data) => {
        if (err) {

            res.send(err.message)
        }else{

            if(data[0].role=="admin"){

                connect.query("select * from buynow", (err, data) => {
                    if (err) res.send(err.message);
                    else res.send(data);
                  });

            }else{
                res.send({
                    msg:"unauthorized"
                })
            }

        }
       
      })   
       


});
app.listen(3009, () => {
  console.log("hi strted");
});
