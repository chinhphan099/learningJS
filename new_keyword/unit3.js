/*
  Viết hàm lengthObj để in ra độ dài của một đối tượng
*/

function lengthObj(obj) {
  var len = 0;
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      len++;
    }
  }
  return len;
}

var student = {
  name: "Jerry",
  age: 14,
  role: "student"
}

lengthObj(student); // length: 3
