const express = require('express');
const { port } = require('./config');
const router = require('./router');

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date()}`);
  next();
});

app.use(router);

// ez kell legyen az utolso app.use
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  return res.end('OMG ERROR');
});

const listener = app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const addr = listener.address();
  console.log(`Az alkalmazas a következő URL-en érhető el: http://localhost:${addr.port}`);
});
