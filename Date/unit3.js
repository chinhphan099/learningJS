/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ cách ngày được truyền vào n ngày
 */
function subtractDays(date, n) {
  var d = new Date();
  d.setDate(date.getDate() - 5);
  return d.getDate();
}

console.log(subtractDays(new Date(), 5));
