/*
  Viết hàm trigonim để in ra 3 giá trị sin cos tan của một số nhập vào
*/

function trigonim(number) {
  console.log('Sin(' + number + ') = ' + Math.floor(Math.sin(number) * 1000) / 1000);
  console.log('Cos(' + number + ') = ' + Math.floor(Math.cos(number) * 1000) / 1000);
  console.log('Tan(' + number + ') = ' + Math.floor(Math.tan(number) * 1000) / 1000);
}

trigonim(45);
// Sin(45) = 0.850
// Cos(45) = 0.525
// Tan(45) = 1.619
