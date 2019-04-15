/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
  console.log(x--);
  var intervalId = setInterval(function() {
    if(x > 0) {
      console.log(x--);
    }
    else if(x === 0) {
      clearInterval(intervalId);
      console.log('Happy new year');
    }
  }, 1000);
}

countDown(5);
