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

console.log(findMaxDiff([1, -10, 5, 18, -9, 5])); //27
