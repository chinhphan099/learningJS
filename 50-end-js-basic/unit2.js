// Capital first letter of each word
function capitalize(str) {
  var res = str.split(' ').map(function(c) {
    return c.charAt(0).toUpperCase() + c.slice(1).toLowerCase();
  });
  return res.join(' ');
}

console.log(capitalize('hello world! MY NAME\'s Chinh'));
