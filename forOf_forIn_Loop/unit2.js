/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
  if(!arr.length) {
    return false;
  }
  var ret = 1;
  for(var number of arr) {
    ret *= number;
  }
  return ret;
}

console.log(multiply([2, 3, 4])); // expect: 24
