let chai = require('chai');
var expect = chai.expect;

// viết hàm Kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không
function startWith(str){
  var hasJava = str.split(' ').find(function(s) {
    return s.indexOf('Java') > -1;
  });

  if(!!hasJava) {
    return true;
  }
  return false;
}

describe('startWith', function () {
  it('return higest of number startWith("Java")', function () {
    expect(startWith('Java')).to.eql(true);
  });
});
