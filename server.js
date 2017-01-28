const http = require('http');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
var index = fs.readFileSync('./build/index.html');

const server = http.createServer((req, res) => {
 res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});