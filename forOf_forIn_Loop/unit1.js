/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */
// for...of - đọc từng value trong mảng
// for...in - đọc từng key trong object

var numbers = [1,2,3,4];
for(var number of numbers) {
  console.log(number);
}

// ------------
var square = {
  width: 5,
  height: 20
};
for(var key in square) {
  console.log(key, square[key]);
}
