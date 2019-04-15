var fs = require('fs');
var axios = require('axios');
var fetch = require('node-fetch');
/*
fs.readFile('./data.json', { encoding: 'utf8'}, function(err, data) {
    console.log('Data loaded from disk', data);

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(res) {
        console.log('Data downloaded from url', res.data);
      });
  }
);
*/

/**
 * Using async await and Promise to recode the above codes.
*/

var loadDataLocal = function(url) {
  return new Promise(function(resolve, reject) {
    fs.readFile(url, {encoding: 'utf8'}, function(err, data) {
      if(!err) {
        resolve(data);
      }
      else {
        reject(err);
      }
    });
  });
};

var loadDataUrl = function(url) {
  return axios.get(url)
    .then(function(response) {
      return response.data;
    }).catch(function(err) {
      console.log(err);
    });

  // return fetch(url)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //   });
};

async function readFile() {
  var dataFromDisk = await loadDataLocal('./data.json');
  var dataFromUrl = await loadDataUrl('https://jsonplaceholder.typicode.com/todos/1');
  console.log('Data loaded from disk\n', dataFromDisk);
  console.log('Data downloaded from url\n', dataFromUrl);
  return [dataFromDisk, dataFromUrl];
};
readFile().catch(function(err) {
  console.log(err);
});
