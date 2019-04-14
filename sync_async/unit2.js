/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */
var axios = require('axios');
async function request(resolve) {
  try {
    var res1 = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    var res2 = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
    console.log(res1.data, res2.data);
  }
  catch(err) {
    console.log(err);
  }
}
request();
