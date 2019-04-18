let chai = require('chai');
var expect = chai.expect;

// get file extention
function getExtensionFilename(filename) {
  return filename.slice(filename.lastIndexOf('.') + 1);
}

describe('getExtensionFilename', function() {
  it('Get extionsion of file', function() {
    expect(getExtensionFilename('JavHD.mp4')).to.equal('mp4');
  });

  it('Get extionsion of file', function() {
    expect(getExtensionFilename('tài-liệu-quan-trọng.doc')).to.equal('doc');
  });

  it('Get extionsion of file', function() {
    expect(getExtensionFilename('C:\Users\NamHandsome\Desktop\index.html')).to.equal('html');
  });
});
