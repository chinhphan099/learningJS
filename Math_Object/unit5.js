/*
  Viết hàm rightTriangle để kiểm tra 3 cạnh của một tam giác và cho biết đó có phải là tam giác vuông hay không?
    Nếu có thì in ra "Yes"
    Không thì in ra "No"
*/

function rightTriangle(a, b, c) {
  var powA = Math.pow(a, 2),
    powB = Math.pow(b, 2),
    powC = Math.pow(c, 2);

  if(powA === powB + powC ||
    powB === powA + powC ||
    powC === powA + powB) {
    return 'Yes';
  }
  else {
    return 'No';
  }
}

console.log(rightTriangle(3, 4, 5)); // "Yes"

console.log(rightTriangle(1, 2, 3)); // "No"
