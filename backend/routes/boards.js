var express = require('express');
var router = express.Router();
var Board = require('../models/boards');

router.get('/', (req, res) => {
  Board.find({})
    .sort({ update_at : -1})
    .then(boards => {
      res.json(boards)
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/:id', (req, res) => {
  Board.findById(req.params.id)
    .then(board => {
      res.json(board)
    })
    .catch(err => {
      res.json(err)
    })
});

router.post('/article', (req, res) => {
  Board.create(req.body, (err, board) => {
    if (err) {
      res.json(err)
    } else {
      res.json(board)
    }
  });
});

router.put('/article/:id',(req,res) => {
  Board.findOneAndUpdate({ _id : req.params.id}
    ,{ $set : { title: req.body.title,
      rating : req.body.rating,
      poster : req.body.poster,
      introduction : req.body.introduction }
    },{
      new : true
    })
    .then(board => res.json(board))
    .catch(err => res.json(err))
});

router.delete('/article/:id',(req,res) => {
  Board.findOneAndRemove({
    _id : req.params.id
  })
    .then(board => res.send(`${board.title}`))
    .catch(err => res.json(err))
});

module.exports = router;