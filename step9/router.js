const { Router } = require('express');

const router = Router();

router.get('/error', () => {
  throw new Error('jaj ne :(');
});

router.get('/hello', (req, res) => {
  const { query } = req;
  let response = 'Hello';
  if (query.nev) {
    response += ` ${query.nev.charAt(0).toUpperCase() + query.nev.slice(1)}`;
  }
  res.end(`${response}!`);
});

module.exports = router;
