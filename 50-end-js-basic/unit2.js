let chai = require('chai');
var expect = chai.expect;

// Capital first letter of each word
function capitalize(str) {
  var res = str.split(' ').map(function(c) {
    return c.charAt(0).toUpperCase() + c.slice(1).toLowerCase();
  });
  return res.join(' ');
}

describe('capitalize', function() {
  it('capitalizes the first letter of every word in a sentence', function() {
    expect(capitalize('hi there, how is it going?')).to.equal('Hi There, How Is It Going?');
  });

  it('capitalizes the first letter of every word in a sentence', function() {
    expect(capitalize('i love breakfast at bill miller bbq')).to.equal('I Love Breakfast At Bill Miller Bbq');
  });

  it('capitalizes the first letter of every word in a sentence', function() {
    expect(capitalize('xin chào')).to.equal('Xin Chào');
  });

  it('capitalizes the first letter of every word in a sentence', function() {
    expect(capitalize('look, it is working!')).to.equal('Look, It Is Working!');
  });
});
