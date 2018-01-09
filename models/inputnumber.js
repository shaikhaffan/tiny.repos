var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inputNumberSchema = new Schema({
	userInput    : Number,	
	Date : String,	
  
});

//mongoose.model('BlogPost', BlogPost);

const inputNumber = mongoose.model('userInputList',inputNumberSchema);
module.exports = inputNumber;