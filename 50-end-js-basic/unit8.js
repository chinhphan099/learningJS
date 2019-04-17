let chai = require('chai');
var expect = chai.expect;

function first(array, n) {
  if(!n) {
    return array[0];
  }
  if(0 > n) {
    return [];
  }
  if(n > array.length) {
    return array;
  }
  return array.slice(0, n);
}

describe('first', function () {
  it('should return the first item if n is not provided', function () {
    expect(first([7, 9, 0, -2])).to.equal(7);
  });

  it('should return an empty array if input array is empty', function() {
    expect(first([], 3)).to.eql([]);
  });

  it('should return an array of n items if n is specified', function() {
    expect(first([7, 9, 0, -2], 3)).to.eql([7, 9, 0]);
  });

  it('should return all items if n > array length', function() {
    expect(first([7, 9, 0, -2], 6)).to.eql([7, 9, 0, -2]);
  });

  it('should return an empty array if n < 0', function() {
    expect(first([7, 9, 0, -2], -3)).to.eql([]);
  });
});
