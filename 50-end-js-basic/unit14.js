let chai = require('chai');
var expect = chai.expect;

function toNextChar(str) {
  // Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmpp"
  // Tham số:
  // - String: chuỗi nhập vào ban đầu.
  var arr = str.split('').map(function(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  });
  return arr.join('');
}

describe("toNextChar", function () {
  it("Return a String with characters that have been replaced", function() {
    expect(toNextChar('Hello')).to.equal('Ifmmp');
  });
});
