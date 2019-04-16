'use strict';
var a = 1;

function foo() {
  var a = 2;
  return a;
}

function bar() {
  a = 2;
  return a;
}

foo();
console.log(a); // Kết quả?
bar();
console.log(a); // Kết quả?
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh

/*
line 14 => 1 => the variable 'a' in function foo is belong scope of funtion foo (local scope).
line 16 => 2 => the variable 'a' in function bar is belong global scope.
*/
