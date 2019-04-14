/**
 * Sort an array from shortest string to longest
 */
function lengthSort(arr) {
  var resArr = arr.sort(function(a, b) {
    return a.length - b.length;
  });
  return resArr;
}

lengthSort(["dog", "wolf", "by", "family", "eaten"])
// ["by", "dog", "wolf", "eaten", "family"]
// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length
