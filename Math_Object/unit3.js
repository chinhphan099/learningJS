/*
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.

  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  return arr.map(function(number) {
    return Math.abs(number);
  });
}

positiveNumber([-2, 3, -4, -7, 10]); // [ 2, 3, 4, 7, 10 ]
