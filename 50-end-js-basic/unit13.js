let chai = require('chai');
var expect = chai.expect;

function pyString(str) {
  // Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
  // Tham số:
  // - String: chuỗi nhập vào lúc đầu.
  if(str.indexOf('Py') === 0) {
    return str;
  }
  return 'Py' + str;
}

describe('pyString', function () {
  it('Should return a new String with "PY" in front of the String', function () {
    expect(pyString("Coders Tokyo")).to.equal("PyCoders Tokyo");
  });

  it('If the font of the String has "Py", return this String', function () {
    expect(pyString('PyHello')).to.equal('PyHello');
  });
});
