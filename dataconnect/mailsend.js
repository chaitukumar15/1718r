var express = require("express");

var app = express();


var otp=require("../helpers/otp")
var nodemailer = require("nodemailer");

var transpoter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "cheymadakasira@gmail.com",
    pass: "jhdo thvj qfeh octd", // Ensure this is your correct app password
  },
});

app.get("/mail", (req, res) => {


  var mailoptions = {
    from: "cheymadakasira@gmail.com",
    to: "megavathmalleshmegavathmallesh@gmail.com",
    subject: "Sending Email using Node.js",
    html: `hi this is html code written in mail service
      <p>hi my otp is</p>
      <h1>${otp()}</h1>
      
      `,
  };

  transpoter.sendMail(mailoptions, (err, msg) => {
    if (err) {
      console.log(err.message);
      res.send(err.message);
    } else {
      console.log(msg);
      res.send({msg,otp});
    }
  });
});

app.listen(4000, () => {
  console.log("hi started the server");
});
