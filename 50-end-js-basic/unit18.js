let chai = require('chai');
var expect = chai.expect;

/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
// Viêt hàm tại đây!
}

describe('findMostFrequent', function() {
  it('The number which appears most', function() {
    expect(findMostFrequent([1,2,3,4,1,2,2])).to.eql([2]);
  });

  it('The number which appears most', function() {
    expect(findMostFrequent([1,1,2,2,1])).to.eql([1]);
  });

  it('The number which appears most', function() {
    expect(findMostFrequent([ 0, 16, 23, 10, 7, 32, 36, 5, 38, 7, 31, 13, 23, 16, 14, 26, 13, 37, 36, 26 ])).to.eql([ 7, 13, 16, 23, 26, 36 ]);
  });

  it('The number which appears most', function() {
    expect(findMostFrequent([ 11, 18, 28, 9, 25, 25, 33, 1, 0, 13, 10, 7, 39, 37, 31 ])).to.eql([ 25 ]);
  });


});
