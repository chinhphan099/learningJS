let chai = require('chai');
var expect = chai.expect;

function nearestTo100(a, b){
  return Math.abs(a - 100) > Math.abs(b - 100) ? b : a;
}

describe('TheNearesrTo100', function () {
  it('return 89 is nearset to 100 number nearestTo100(89,170)', function () {
    expect(nearestTo100(89,170)).to.eql(89);
  });
});
