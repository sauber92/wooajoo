var express = require('express');
var router = express.Router();
var movies = require('../movies.json');
// var Movie = require('../models/movies');

router.get('/', function (req, res, next) {
  res.send(movies)
});

router.get('/:id', function (req, res, next) {
  var id = parseInt(req.params.id, 10)
  var movie = movies.filter(function (movie) {
    return movie.id === id
  });
  res.send(movie)
});

// router.get('/', function (req, res) {
//   // Use the Beer model to find all beer
//   Movie.find(function (err, movie) {
//     if (err)
//       res.send(err);
//
//     res.json(movie);
//   });
// });

module.exports = router;