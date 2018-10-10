const express = require('express');
const { port } = require('./config');
const router = require('./router');

const app = express();
app.use(router);

const listener = app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const addr = listener.address();
  console.log(`Az alkalmazas a következő URL-en érhető el: http://localhost:${addr.port}`);
});
