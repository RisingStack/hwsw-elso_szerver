const http = require('http');

const args = process.argv.slice(2);

const DEFAULT_PORT = 3000;

let port = DEFAULT_PORT;
if (args[0]) {
  port = parseInt(args[0], 10);
}

const handler = (req, res) => {
  res.end('hello');
};

const server = http.createServer(handler);

server.listen(port);
