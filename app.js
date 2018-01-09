const express = require('express'); // This is to include ExpressJs Library in the nodejs.
var bodyparser = require('body-parser');
var app = new express(); // Create a object for express library

const inputNumber = require('./models/inputnumber');
var config = require('./config/config');
app.set('view engine','ejs');

// This code is use to start the server. on this port our server will get listen
app.listen(5000,function(){
    console.log("Shaw Commercial Started");
 });
 
// Below code use static file from public folder like views,images,css. 
app.use(express.static(__dirname + '/public'));

//Please Mention this Middleware if you want to post the data to server.
app.use(bodyparser.json()); // support json encoded bodies


// Route To add a Number to a MongoDb Database

app.post('/addnumber',function(req,res,next){
		let newData=({
			userInput:req.body.number,
			Date:new Date(Date.now()).toLocaleString(),        
		}); 
		 //res.header("Access-Control-Allow-Origin", "*");
		 //res.writeHead(200, {'Content-Type': 'text/plain'});
			inputNumber.create(newData).then(function(ninja){				
			res.send({res : "record-posted",
			id : ninja._id });
				console.log(ninja._id)
			}).catch(next)
});



                           