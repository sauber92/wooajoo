var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boardSchema = new Schema({
  title : { type:String, required : true },
  poster : String,
  rating : String,
  introduction : String,
  created_at : { type : Date, default : Date.now },
  update_at : { type : Date, default : Date.now }
});

module.exports = mongoose.model('Movie', boardSchema);