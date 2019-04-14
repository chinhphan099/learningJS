// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
  var obj = {};
  arr.reduce(function(emptyObject, item2) {
    if(!obj[item2]) {
      obj[item2] = 1;
    }
    else {
      obj[item2] = obj[item2] + 1;
    }
    return obj;
  }, {});
  return obj;
}

countOccurrences(['a', 'b', 'c', 'b', 'a']);
// {
//   a: 2,
//   b: 2,
//   c: 1
// }
