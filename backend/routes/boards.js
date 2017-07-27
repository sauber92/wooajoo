var express = require('express');
var router = express.Router();
var Movie = require('../models/boards');

router.get('/', (req, res) => {
  Movie.find({})
    .sort({ update_at : -1})
    .then(movies => {
      res.json(movies)
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.json(movie)
    })
    .catch(err => {
      res.json(err)
    })
});

router.post('/article', (req, res) => {
  Movie.create(req.body, (err, movie) => {
    if (err) {
      res.json(err)
    } else {
      res.json(movie)
    }
  });
});

router.put('/article/:id',(req,res) => {
  Movie.findOneAndUpdate({ _id : req.params.id}
    ,{ $set : { title: req.body.title,
      rating : req.body.rating,
      poster : req.body.poster,
      introduction : req.body.introduction }
    },{
      new : true
    })
    .then(movie => res.json(movie))
    .catch(err => res.json(err))
});

router.delete('/article/:id',(req,res) => {
  Movie.findOneAndRemove({
    _id : req.params.id
  })
    .then(movie => res.send(`${movie.title}`))
    .catch(err => res.json(err))
});

module.exports = router;