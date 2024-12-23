var http = require("http");

var url = require("url");

var fs = require("fs");

var server = http.createServer(async (req, res) => {
  // console.log(req.url);
  // let data = await fetch("https://fakestoreapi.com/products")
  // let resDta = await data.json()

  var urll = url.parse(req.url, { extends: true });

  // console.log(urll.pathname,"juqgw");

  if (urll.pathname == "/post") {
    let a=fs.readFileSync("./index.html","utf-8")
    res.write(a)
    res.end();
  } else if (urll.pathname == "/comments") {
    res.write(
    JSON.stringify([
        { id: "1", text: "a comment about post 1", postId: "1" },
        { id: "2", text: "another comment about post 1", postId: "1" },
      ])
    );
    res.end();
  } else if (urll.pathname == "/profile") {
    res.write(
      JSON.stringify({
        name: "typicode",
      })
    );
    res.end();
  } else {
    res.write("404 not found");
    res.end();
  }
});

server.listen(3001, () => {
  console.log("server started");
});
