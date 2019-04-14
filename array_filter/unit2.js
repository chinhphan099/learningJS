mocha.setup('bdd');
var expect = chai.expect;

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  var returnArr = arr.filter(function(item) {
    return item % 2 === 0;
  });
  return returnArr;
}

evensOnly([3, 6, 8, 2]); // [6, 8, 2]
evensOnly([1, 5, 5]); // []
