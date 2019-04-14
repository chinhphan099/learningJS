// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
  var evenNumber = array.find(function(number) {
    return number % 2 === 0;
  });
  return evenNumber;
}

findFirstEvenNumber([7, 9, 0, -2]); // 0
findFirstEvenNumber([7, 9, 3]); // undefined
