
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

app.use(express.static(__dirname)); 

app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

app.post('/', upload.single("Upload"), function (req, res) {
  console.log(req.file); //form files
	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
	res.send(200, "Your File Size: " + req.file.size + " bytes!");
})

//var storage = multer.fileSize();

app.listen(process.env.PORT || 3000, function() {
	console.log("Ready!");
});