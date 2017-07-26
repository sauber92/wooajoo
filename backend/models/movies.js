var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  id: Number,
  name: String,
  year: Number,
  director: String,
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;