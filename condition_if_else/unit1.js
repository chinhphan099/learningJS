/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
  var max = 0;
  for(var value of arr) {
    if(value > max) {
      max = value;
    }
  }
  return max;
}

max([5, 6, 9]); // 9
