/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), ngược lại trả về false
 */
function isWeekend(dateString) {
  var d = new Date(dateString),
    date = d.getDay();

  if(date === 6 || date === 7) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isWeekend('2019/04/19'));
console.log(isWeekend('2019/04/20'));
