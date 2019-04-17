let chai = require('chai');
var expect = chai.expect;

function difference(n) {
  //Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
  if(n > 13) {
    return Math.abs(n - 13) * 2;
  }
  return Math.abs(n - 13);
}

describe('getDifference', function() {
  it('difference between 19 and 13', function() {
    expect(difference(19)).to.eql(12);
  });
  it('difference between 3 and 13', function() {
    expect(difference(3)).to.eql(10);
  });
  it('difference between 1 and 13', function() {
    expect(difference(1)).to.eql(12);
  });
  it('difference between 20 and 13', function() {
    expect(difference(20)).to.eql(14);
  });
});
