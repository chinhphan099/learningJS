/*
  Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
*/

function powerup(arr) {
  var tempArr = arr.filter(function(number) {
    return number % 2 === 0;
  });
  var resArr = tempArr.map(function(number) {
    return Math.pow(number, 2);
  });
  return resArr;
}

powerup([0, 3, 6, 7, 4]); // [0, 3, 36, 7, 16]
