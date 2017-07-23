/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();
const path = require('path');
// const auth = require('../auth');

/* GET home page. */
// eslint-disable-next-line prefer-arrow-callback
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;
