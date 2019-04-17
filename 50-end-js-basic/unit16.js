let chai = require('chai');
var expect = chai.expect;

function middleArray(arr1,arr2){
}




describe('Make new array form the middle element of two array has length is 3', function () {
   it('return [3,5] when middleArray([1,3,2],[4,5,6])', function () {
       expect(middleArray([1,3,2],[4,5,6])).to.eql([3,5]);
   });
});
