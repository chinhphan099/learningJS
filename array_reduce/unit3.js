// Given an array of arrays, flatten them into a single array
function flatten(arr) {
  var newArr = arr.reduce(function(arr1, arr2) {
    return arr1.concat(arr2);
  });

  return newArr;
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
