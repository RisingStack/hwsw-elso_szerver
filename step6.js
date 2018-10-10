const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  const { query } = req;
  let response = 'Hello';
  if (query.nev) {
    response += ` ${query.nev.charAt(0).toUpperCase() + query.nev.slice(1)}`;
  }
  res.end(`${response}!`);
});

const args = process.argv.slice(2);

const DEFAULT_PORT = 3000;

let port = DEFAULT_PORT;
if (args[0]) {
  port = parseInt(args[0], 10);
}

const listener = app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const addr = listener.address();
  console.log(`Az alkalmazas a következő URL-en érhető el: http://localhost:${addr.port}`);
});
