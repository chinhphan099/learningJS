/*
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

function average(arr) {
  var total = arr.reduce(function(a, b) {
    return a + b;
  });
  return Math.round(total / arr.length);
}

average([8, 8 , 6.75]) // 8
