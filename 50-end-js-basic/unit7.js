let chai = require('chai');
var expect = chai.expect;

//Compare count of letter 'p' vs 't'
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str){
  if(str.trim().length === 0) {
    return 'empty string';
  }

  return (str.match(/p/g) || []).length === (str.match(/t/g) || []).length
}

describe('equal_pt', function () {
    it('Check if not the string', function () {
    expect(equal_pt('')).to.equal('empty string');
  });
  it('Check if a given string "paatpsts" ', function () {
    expect(equal_pt('paatpsts')).to.equal(true);
  });
  it('Check if a given string "aass"', function () {
    expect(equal_pt('aass')).to.equal(true);
  });
      it('Check if a given string "paatpss" ', function () {
    expect(equal_pt('paatpss')).to.equal(false);
  });

});
