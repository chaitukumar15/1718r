var http = require("http");

var server = http.createServer((req, res) => {
  var body = "";
  req.on("data", (chunk) => {
    console.log(chunk, "chunk");

    res.end("hi hello");

    // body += chunk;
  });

//   res.end("hi i m last");
  //   req.on("end", () => {
  //     console.log(body,"body");

  //     res.write(body);
  //     res.end();
  //   });
});

server.listen(3006, () => {
  console.log("server staered ");
});
