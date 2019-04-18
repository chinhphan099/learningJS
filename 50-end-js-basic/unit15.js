let chai = require('chai');
var expect = chai.expect;

function newString(str, n){
  return str.slice(0, n) + str.slice(-n);
}

describe('make New string from n character top and bottom from old string', function () {
  it('return dele from describle when n = 2', function () {
    expect(newString('describle',2)).to.eql('dele');
  });
  it('return descrrible from describle when n = 5', function () {
    expect(newString('describle',5)).to.eql('descrrible');
  });
});
