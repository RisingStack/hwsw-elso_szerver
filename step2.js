const http = require('http');

const DEFAULT_PORT = 3000;

const port = DEFAULT_PORT;

const handler = (req, res) => {
  res.end('hello');
};

const server = http.createServer(handler);

server.listen(port);
