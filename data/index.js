var fs = require("fs");

function hello() {
  return new Promise((resolve, reject) => {
    resolve("hello im promise");
  });
}

hello().then((res) => {
  console.log(res);
});

console.log("hi im syn ");

setTimeout(() => {
  console.log("hi i an set time out");
}, 0);

fs.readFile("data.js","utf-8" ,(err, data) => {
  console.log(data);
});

setImmediate(() => {
  console.log("hello im  set immedate ");
});

process.nextTick(()=>{
    console.log("hello i m next tick");

})

// ("hi im syn ");

// ("hello im promise");

// ("hi i an set time out");

// // data

// ("hello im  set immedate ");
