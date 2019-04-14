/*
  Viết hàm circleMachine() tính chu vi và diện tích hình tròn khi biết bán kính
*/

function circleMachine(r) {
  console.log('Chu vi: ', (r * 2 * Math.PI).toFixed(2));
  console.log('Diện tích: ', (r * r * Math.PI).toFixed(2));
}

circleMachine(3);
// Chu vi: 18.85
// Diện tích: 28.27
