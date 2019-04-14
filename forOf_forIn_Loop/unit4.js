function sum(numbers) {
  // Giả thiết: numbers là một array các số nguyên
  // Yêu cầu:
  //  - trả về tổng các số, dùng vòng lặp for ... of
  //  - nếu array trống trả về 0
  if(!numbers.length) {
    return 0;
  }

  var total = 0;
  for(var number of numbers) {
    total += number;
  }
  return total;
}

sum([]); // 0
sum([1, 2, 3]); //6
