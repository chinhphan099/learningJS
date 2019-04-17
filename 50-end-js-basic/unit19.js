let chai = require('chai');
var expect = chai.expect;

/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
// Viết hàm tại đây!
}

describe('rearrangeChar', function() {
  it('check whether it is possible to rearrange characters', function() {
    expect(rearrangeChar('afaw','afaw')).to.equal(true);
  });

  it('check whether it is possible to rearrange characters', function() {
    expect(rearrangeChar('fgagaawef23423','haefawf')).to.equal(false);
  });

  it('check whether it is possible to rearrange characters', function() {
    expect(rearrangeChar('awef23f','n65u2r')).to.equal(false);
  });

  it('check whether it is possible to rearrange characters', function() {
    expect(rearrangeChar('a32rbvw3','23berg')).to.equal(false);
  });
});
