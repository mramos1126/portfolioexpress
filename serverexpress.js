var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var PORT = 9000;


app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json'})); 

 
app.use('/', express.static(__dirname + '/public'));





 //  app.get('/rpsgame', function(req, res){
	// 	res.sendFile(path.join(__dirname + '/rps.html'));
		
	// });
 // app.get('/portfolio', function(req, res){
	// 	res.sendFile(path.join(__dirname + '/portfolio.html'));
	
	// });

 // 	app.get('/contact', function(req, res){
 // 		res.sendFile(path.join(__dirname + '/contact.html'));
	// });

 // app.get('/index', function(req, res){
	// 	res.sendFile(path.join(__dirname + '/public/index.html'));
	
	// });


app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
})