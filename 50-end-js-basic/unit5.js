// viết hàm Kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không
function startWith(str){
  var hasJava = str.split(' ').find(function(s) {
    return s.indexOf('Java') > -1;
  });

  if(!!hasJava) {
    return true;
  }
  return false;
}

console.log(startWith('Javas'));
