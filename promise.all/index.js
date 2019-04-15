/**
 * Use Promise.all + axios to load 3 links below at the same time:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

var axios = require('axios');

var loadData = function(url) {
  return new Promise(function(resolve, reject) {
    axios.get(url)
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

Promise.all([
  loadData('https://jsonplaceholder.typicode.com/todos/1'),
  loadData('https://jsonplaceholder.typicode.com/todos/2'),
  loadData('https://jsonplaceholder.typicode.com/todos/3')
  ])
  .then(function(datas) {
    console.log(datas);
  })
  .catch(function(err) {
    console.log(err);
  });
