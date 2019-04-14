// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  var returnArr = arr.filter(function(item) {
    return item >= 5;
  });
  return returnArr;
}

fiveAndGreaterOnly([3, 6, 8, 2]); // [6, 8]
fiveAndGreaterOnly([1, 5, 5]); // [5, 5]
