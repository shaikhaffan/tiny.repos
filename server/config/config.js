var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.connect("mongodb://localhost:27017/roomdb");
 mongoose.connect('mongodb://localhost:27017/t' ,function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
}); 