/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
function diff(fromDate, toDate) {
  var ms = Math.abs(toDate.getTime() - fromDate.getTime());
  return Math.round(ms / (1000 * 3600 * 24));
}

var start = new Date('2019/04/15');
var end = new Date();

console.log(diff(start, end));

