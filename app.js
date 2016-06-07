
var express = require('express');
var app = express();
var multer = require('multer');

app.use(express.static(__dirname)); 

app.get('/', function(req, res) {
    res.sendFile('/index.html');
});



app.listen(process.env.PORT || 3000, function() {
	console.log("Ready!");
});