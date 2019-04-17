let chai = require('chai');
var expect = chai.expect;

function checkInt(number1, number2) {
  // Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. Nếu có 1 số âm và một số dương thì trả về true. Các trường hợp khác trả về false. Số 0 là số không âm cũng không dương
  // Tham số:
  // - number1: số nguyên thứ nhất
  // - number2: số nguyên thứ hai
  if(Math.min(number1, number2) < 0) {
    return true;
  }
  return false;
}

describe('checkInt', function() {
  it('Should return true if have a negative number and a positive number', function () {
    expect(checkInt(-1, 2)).to.equal(true);
  });

  it("Should return the false value if both number are positive or negative", function () {
    expect(checkInt(2, 6)).to.equal(false);
  });
});
