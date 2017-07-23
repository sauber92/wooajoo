// eslint-disable-next-line import/newline-after-import
const express = require('express');
const router = express.Router();
const movies = require('../movies.json');

// eslint-disable-next-line prefer-arrow-callback
router.get('/post', function (req, res) {
  res.send(movies);
});

// eslint-disable-next-line prefer-arrow-callback
router.get('/post/:id', function (req, res) {
  const id = parseInt(req.params.id, 10);
// eslint-disable-next-line prefer-arrow-callback,no-shadow
  const movie = movies.filter(function (movie) {
    return movie.id === id;
  });
  res.send(movie);
});

// eslint-disable-next-line eol-last
module.exports = router;