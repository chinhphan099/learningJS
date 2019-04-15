/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var axios = require('axios');
var co = require('co');
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];

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

// Cách 1: Sử dụng vòng lặp for
var readFiles = co.wrap(function*(files) {
  var res = [];
  for(var file of files) {
    var data = yield loadData(file);
    res.push(data);
  }
  return res;
});

readFiles(urls)
  .then(function(datas) {
    console.log(datas);
  });

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise
var readFiles_1 = co.wrap(function*(files) {
  var datas = yield files.map(function(file) {
    return loadData(file);
  });
  return datas;
});

readFiles_1(urls)
  .then(function(datas) {
    console.log(datas);
  });











