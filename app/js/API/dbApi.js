module.exports = function(app, port, rootPath, apiRoutes) {
	console.log('rootPath is: ' + rootPath);
	var _ = require('underscore');
	var usersApi = require('../API/usersApi')(app, port, rootPath, apiRoutes);
	var queryApi = require('../API/queryApi')(app, port, rootPath, apiRoutes);
	var analyticsApi = require('../API/analyticsApi')(app, port, rootPath, apiRoutes);
	var subjsApi = require('../API/subjsApi')(app, port, rootPath, apiRoutes);
	var mongoose = require('mongoose');
	var jwt = require('jsonwebtoken'); // used to create, sign and verify tokens
	var config = require('../config');  // get our config file

	var Schema = mongoose.Schema;

	console.log('queryApi is: ');
	console.log(queryApi);

	var User = require(rootPath + '/app/js/models/user'); // get our mongoose model

	var bcrypt = require('bcrypt-nodejs'); // load the bcrypt module
	var salt = bcrypt.genSaltSync(12); // generate a salt, higher values make it longer to encrypt and decrypt
	// var hash = bcrypt.hashSync('my password', salt); // hash the password with the salt

	mongoose.connect(config.localdatabase); // connect to DB

	var db = mongoose.connection;
	 
	db.on('error', function (err) {
		console.log('connection error', err);
	});

	db.once('open', function () {
		console.log('SSCEexams DB is now connected.');
	});

	var ssceApi = config.ApiElasticIp;
	console.log('ssceApi is: ' + ssceApi);

	// apply the routes to our application with the prefix /api
	app.use('/api', apiRoutes);

	app.set('superSecret', config.secret); // secret variable

	app.get('/api/ingestlogs', function(req, res) {
		console.log('Ingested log data is: ');
		console.log(req.body);
		res.send('Ingested log data received');
	});

	// DB and Token Test APIs
	apiRoutes.get('/', function(req, res) {
		res.send('Hello! The API is at http://localhost:' + port + '/api');
	});

	apiRoutes.get('/setup', function(req, res) {
		function seedDBFunction(collection){ 
			// _.each(collection, function(model){ 
		 //        model.remove(function (err, data) {
			// 		if (err) console.log(err);
			// 		else console.log('Deleted : ', data );
			// 	});
		 //    }); 

		 //    _.each(collection, function(model){ 
		 //        model.save(function (err, data) {
			// 		if (err) console.log(err);
			// 		else console.log('Saved : ', data );
			// 	});
		 //    }); 
		    res.json({ success: true });
		};
		// seed data into the DB, normally you will protect your password by hashing it
		// var usersSeed = [
		// 	new User({ name: 'Adetunji', password: 'adetunjipwd', admin: true }),
		// 	new User({ name: 'John', password: 'johnpwd', admin: false }),
		// 	new User({ name: 'Jane', password: 'janepwd', admin: false }),
		// 	new User({ name: 'Bawo', password: 'bawopwd', admin: false })
		// ];

		// // let us see a custom method with mongoose
		// var chris = new User({
		//   	name: 'Chris',
		//   	password: 'chrispwd' 
		// });

		// seedDBFunction(usersSeed);
	});

	// API Routes below
	app.post('/api/authenticate', function (req, res) {
		res.send({
			success: true,
			message: "Enjoy your token!",
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3QiLCJ1c2VyUHdkIjoiJDJhJDEyJGd6N01XU1VpQmdxSDVYemtiaEFnLmVqa1gxMTRRNy9iYloxVG1iRm5zQnpZSVNGZUV1ZE9LIiwiaWF0IjoxNDg4MTUxNTQ1LCJleHAiOjE0ODk2NTE1NDV9.IGF9IwOmNYSPAjOSBb2UmkC0VUC0k9reZh9clGK9vzY"
		});
		// find the user
		// User.find({
		// 	username: req.body.name
		// 	// password: req.body.pwd
		// }, function(err, user) {
		// 	console.log('the user.username: ' + user.username);
		// 	// console.log('the user.password: ' + user.password);
		// 	if (err) throw err;
		// 	db.close();
		// 	// if(!user) {
		// 	// 	res.send({ 
		// 	// 		success: false, 
		// 	// 		message: 'Authentication failed. User not found.' 
		// 	// 	});
		// 	// } else 
		// 	if (user) {
		// 		console.log('found a user.');
		// 		console.log('the user.username: ' + user.username);
		// 		// console.log('the user.password: ' + user.password);
		// 		// console.log('the decrypted user.pwd: ' + bcrypt.hashSync(user.password, salt));

		// 		// var tempUser = {
		// 		// 	// admin: user.admin,
		// 		// 	userName: user.username,
		// 		// 	userPwd: user.password//bcrypt.hashSync(user.password, salt) //user.password
		// 		// };

		// 		// var token = jwt.sign(tempUser, app.get('superSecret'), {
		// 		// 	expiresIn: 1500000 // in milliseconds, this token expires in 25 minutes
		// 		// });
		// 		// console.log('token is: ' + token);

		// 		// return the information including token as JSON
		// 		res.send({
		// 			success: true,
		// 			message: 'Enjoy your token!',
		// 			token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3QiLCJ1c2VyUHdkIjoiJDJhJDEyJGd6N01XU1VpQmdxSDVYemtiaEFnLmVqa1gxMTRRNy9iYloxVG1iRm5zQnpZSVNGZUV1ZE9LIiwiaWF0IjoxNDg4MTUxNTQ1LCJleHAiOjE0ODk2NTE1NDV9.IGF9IwOmNYSPAjOSBb2UmkC0VUC0k9reZh9clGK9vzY'//token
		// 		});
		// 	} else if (user.password != req.body.pwd) {
		// 		res.send({ 
		// 			success: false, 
		// 			message: 'Authentication failed. Wrong password.'
		// 		});
		// 	} else {
		// 		res.send({ 
		// 			success: false, 
		// 			message: 'Authentication failed, something went wrong!.'
		// 		});
		// 	}
		// });
	});

	// run through before it gets to the routes that we want authenticated
	// apiRoutes.use(function(req, res, next) {
	// 	// check header or URL parameters or post parameters for token
	// 	var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
	// 	var secrt = app.get('superSecret');		
	// 	// decode token
	// 	if (token) {
	// 		// verifies secret and checks the token expiry date
	// 		jwt.verify(token, secrt, function(err, decoded) {
	// 			console.log('err is now: ');
	// 			console.log(err);
	// 			console.log('decoded is now: ');
	// 			console.log(decoded);	
	// 			if(err) {
	// 				return res.send({ 
	// 					success: false,
	// 					message: 'Failed to authenticate token.'
	// 				});
	// 			} else {
	// 				// if everything is good, take the info that came out of the token
	// 				// and pass it to the other routes in the req object
	// 				// (i.e. save the request for use in other routes
	// 				req.decoded = decoded;
	// 				next();
	// 			}
	// 		});
	// 	} else {
	// 		// if there is no token, return an error by sending the right HTTP response code 403
	// 		return res.status(403).send({
	// 			success: false,
	// 			message: 'No token provided'
	// 		});
	// 	}
	// });

	// apiRoutes routes are protected and will require a token
	apiRoutes.get('/', function(req, res) {
		res.json('Welcome to the coolest API on earth!');
	});
};

// Notes: the JWT contains Claims ( data to be transmitted between server and client ) and it can be passed through
// the request either in Header or URL or Body. In case of GET verb , we will pass the JWT through the URL or Header
// but actually anyone else can have this token and use it

// The token must be defined in the header section of the request. Most solutions stands for setting the 'Authorization' key
// in the header. In this case as he is using the JWT token, the value of the 'Authorization' will be 'JWT [jwt-web-token-value]'.
// The idea is to send the token on every request getting a complete stateless API REST. 

// // jquery
// $.ajaxSetup({
//   headers: {
//     'x-access-token': jwt
//   }
// });

// // angular
// $http.defaults.headers.common['x-access-token'] = jwt

// The only way I've figured to do this on GET requests I want authenticated is to have a client-side function
// perform window.location.href = '/protected/'+token; where token is the JWT stored locally, retrieved and then accessed server side as a req.param

// Let’s test this out using POSTman. Change your HTTP request to POST and add the name and password parameters to x-www-form-urlencoded.
// This is how we simulate information coming through a form POST

