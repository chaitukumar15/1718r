function otp(n=4) {
  var otp = "";
  for (i = 0; i < n; i++) {
    var num = Math.floor(Math.random() * 10);
    otp += num;
  }

  return otp;
}


module.exports=otp