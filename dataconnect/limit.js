var express = require("express");

var app = express();

var connection = require("./index.js");

app.get("/users", (req, res) => {
  console.log(req.query);

  var { cat, price } = req.query;

  connection.query(
    `select * from products where category=? order by price ${price} `,
    [cat],
    (err, data) => {
      if (err) res.send(err);
      else res.send(data);
    }
  );
});

app.listen(4001, () => {
  console.log("server started");
});
