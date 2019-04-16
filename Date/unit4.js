/**
 * Tính số ms chênh lệch giữa 2 date object bất kì
 */
function diffMs(a, b) {
  return Math.abs(b - a);
}
// viết ví dụ để kiểm tra
var start = new Date('2019/04/16 22:28');
var end = new Date();
console.log(diffMs(start, end));
