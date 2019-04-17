let chai = require('chai');
var expect = chai.expect;

function omitCharAt(str, n) {
  //Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
  //Lưu ý cho chuối 'abcd' :
  //    element    'a'|'b'|'c'|'d'
  //    index       0 | 1 | 2 | 3
  //  n = 4 thì chuỗi trả về là 'acd'
  //  n = 1 ------------------- 'acd'
  //  n = 2 ------------------- 'abd'
  var index = n > str.length ? Math.abs(n % str.length) : n;
  var arr = str.split('');
  arr.splice(index, 1);
  return arr.join('');
}

describe('omitCharAt', function () {
  it('Omit the first char "a" in string "Hello Quang Dat" (n = 8)', function () {
    expect(omitCharAt("Hello Quang Dat", 8)).to.equal("Hello Qung Dat");
  });

  it('Omit the first char "a" in string "Hello Quang Dat" (n = 68)', function () {
    expect(omitCharAt("Hello Quang Dat", 68)).to.equal("Hello Qung Dat");
  });
});
