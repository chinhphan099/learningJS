let chai = require('chai');
var expect = chai.expect;

// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c){
  return Math.max(a, b, c);
}
describe('findMax', function () {
  it('return higest of number findMax(-6,5,4)', function () {
    expect(findMax(-6, 5, 4)).to.eql(5);
  });
});
