let chai = require('chai');
var expect = chai.expect;

// Reverse a string
function reverse(str) {
  return str.split('').reverse().join('');
}

describe('reverse', function() {
  it('Reverse reverses a string', function() {
    expect(reverse('abcd')).to.equal('dcba');
  });

  it('Reverse reverses a string', function() {
    expect(reverse('  abcd')).to.equal('dcba  ');
  });

  it('Reverse reverses a string', function() {
    expect(reverse('#$#@fhbsk123')).to.equal('321ksbhf@#$#');
  });

  it('Reverse reverses a string', function() {
    expect(reverse('#$  #@ fh  bsk123   @#@!cvcxhb')).to.equal('bhxcvc!@#@   321ksb  hf @#  $#');
  });

  it('Reverse reverses a string', function() {
    expect(reverse('')).to.equal('');
  });

  it('Reverse reverses a string', function() {
    expect(reverse(' ')).to.equal(' ');
  });
});
