// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
function doSomething(a) {
  var b;
  if (a > 0) {
    b = 1;
  } else if (a < 0) {
    b = 2;
  } else {
    b = 3;
  }
  return b;
}

function doSomethingTernary(a) {
  return a > 0 ? 1 : (a < 0 ? 2 : 3);
}

// Test 2 hàm trên với cùng đầu vào
console.log(doSomething(10));
console.log(doSomethingTernary(10));

console.log(doSomething(0));
console.log(doSomethingTernary(0));

console.log(doSomething(-1));
console.log(doSomethingTernary(-1));
