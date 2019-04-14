/**
 * Thử chạy code sau
 */
//var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');

var result = readline.question('Nhập vào mật khẩu');
//console.log(typeof result);

/**
 * Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
 */
var fs = require('fs');
var passwords = fs.readFileSync('pass.json', {encoding: 'utf8'});

var isSuccess = false;

for(var i of JSON.parse(passwords)) {
  if(i.pass === result) {
    isSuccess = true;
    break;
  }
}

if(!!isSuccess) {
  console.log('Welcome');
}
else {
  console.log('Wrong password');
}
