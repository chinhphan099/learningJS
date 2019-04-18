let chai = require('chai');
var expect = chai.expect;

function maxOfSumChain(arr, k) {
  var max = 0, tmp;

  for(var i = 0, n = arr.length; i <= n - k; i++) {
    tmp = 0;

    for(var j = 0; j < k; j++) {
      tmp += arr[i + j];
    }

    if(tmp > max) {
      max = tmp;
    }
  }
  return max;
}

//console.log(maxOfSumChain([1, 3, 2], 2));
describe('Maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers', function() {
  it('return 5 when sumChain([1,3,2],2)', function() {
    expect(maxOfSumChain([1, 3, 2], 2)).to.eql(5);
  });
  it('return 11 when sumChain([1,3,2,6,2],3)', function() {
    expect(maxOfSumChain([1, 3, 2, 6, 2], 3)).to.eql(11);
  });
});
