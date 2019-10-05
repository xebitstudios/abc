var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
var morgan = require('morgan');
// var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

// Configuration
var rootPath = path.normalize(__dirname + '/../');
var port = 8065;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(rootPath + '/app'));

// var config = require(rootPath + '/app/js/config');  // get our config file
// mongoose.connect(config.database); // connect to DB
// app.set('superSecret', config.secret); // secret variable

// get an instance of the router for API routes
var apiRoutes = express.Router();

// Common API Routes
// var testApi = require(rootPath +   '/app/js/API/testApi')(app);
var testApi = require(rootPath + '/app/js/API/dbApi')(app, port, rootPath, apiRoutes);

app.get('*', function(req, res) {
	res.sendFile(rootPath + '/app/index.html');
});

app.listen(port, '0.0.0.0', function() {
	console.log('Express started on ' + port + ';. press Ctrl-C to terminate.');
});
