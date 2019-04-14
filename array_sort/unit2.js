/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
 */
function sortNumbers(arr) {
  var descArr = arr.sort(function(a, b) {
    return b - a;
  });
  return descArr;
}

sortNumbers([5, 1, 3, 2]); // [5, 3, 2, 1]
