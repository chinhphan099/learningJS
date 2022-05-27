/*
  Send mail: install package:
  - nodemailer
  - fs
*/
var a = 'h', b = 'C', c = 'han@0', d = '0', e = 'inhp', f = '7*', p = b + a + e + c + d + f;
  emailList = 'chinhphan099@gmail.com';

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chinh.phan@dfo.global',
    pass: p
  }
});

var fs = require('fs');
fs.readFile('edm.html', function(err, data) {
  var mailOptions = {
    from: 'chinh.phan@dfo.global',
    to: emailList,
    subject: 'Sending Email using Node.js',
    html: data
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});


























