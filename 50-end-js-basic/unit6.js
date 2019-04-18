let chai = require('chai');
var expect = chai.expect;

function findMaxDiff(arr) {
  /*
    - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
    - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
    - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  */
  var maxSpace = 0;
  for(var i = 0, length = arr.length; i < length - 1; i++) {
    if(Math.abs(arr[i] - arr[i + 1]) > maxSpace) {
      maxSpace = Math.abs(arr[i] - arr[i + 1]);
    }
  }
  return maxSpace;
}

describe('findMaxDiff', () => {
    it('Should return the maximal different between two adjacent elements of a given array of interger', () => {
      expect(findMaxDiff([1, -10, 5, 18, -9, 5])).to.equal(27);
    });

    it('Should return 0 (array has one element)', () => {
      expect(findMaxDiff([5])).to.equal(0);
    });

    it('Should return 0 (empty array)', () => {
      expect(findMaxDiff([])).to.equal(0);
    });
});
