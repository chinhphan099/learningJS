var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('edm.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log('Site run at port: localhost:8080');
    res.end();
  });
}).listen(8080);