var http = require('http');
var fs = require('fs');
var server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile(__dirname + '/index.html', (err, contents) => {
    response.end(contents);
  })
}).listen(3000, '127.0.0.1');