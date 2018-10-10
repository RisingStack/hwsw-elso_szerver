const http = require('http');
const { parse: URLParse } = require('url');
const { parse: queryParse } = require('querystring');

const args = process.argv.slice(2);

const DEFAULT_PORT = 3000;

let port = DEFAULT_PORT;
if (args[0]) {
  port = parseInt(args[0], 10);
}

const handler = (req, res) => {
  const reqURL = URLParse(req.url);
  switch (reqURL.pathname) {
    case '/hello': {
      const query = queryParse(reqURL.query);
      let response = 'Hello';
      if (query.nev) {
        response += ` ${query.nev.charAt(0).toUpperCase() + query.nev.slice(1)}`;
      }
      res.end(`${response}!`);
      break;
    }
    default: {
      res.writeHead(404);
      res.end('Not found');
    }
  }
};

const server = http.createServer(handler);

const listener = server.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const addr = listener.address();
  console.log(`Az alkalmazas a következő URL-en érhető el: http://localhost:${addr.port}`);
});
