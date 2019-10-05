module.exports = function(app, port, rootPath, apiRoutes) {
	console.log('rootPath is: usersApi');
	var _ = require('underscore');
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	apiRoutes.post('/contactus', function(req, res) {
		console.log('Contact us note received below.');
		console.log(req.query);
		res.json({
			data: {
				result: 'Contact Us note received successfully'
			}
		});
	});
	
	apiRoutes.post('/registeruser', function(req, res) {
		console.log('Registering a new User with specified details: ' + req.query.susr + ', and password: ' + req.query.spwd);
		console.log(req.query.susr);
		console.log(req.query.spwd);
		res.json({
			data: {
				result: 'User created succefully'
			}
		});
	});

	apiRoutes.get('/user/:name?', function(req, res) {
		console.log('Querying for the User with specified name: ' + req.query.name + ', and password: ' + req.query.password);
		console.log(req.query.name);
		console.log(req.query.password);
	    User.findOne({
	    	name: req.query.name,
	    	password: req.query.password
	    }, function(err, user) {
	    	console.log('User is: ');
	    	console.log(user);
	    	res.json({
				data: {
					"user": user
				}
			});
	    });
	});

	apiRoutes.get('/user/:id?', function(req, res) {
		console.log('Querying for the User with specified ID.' + req.query.id);
		console.log(req.query.id);
	    User.findOne({
	    	_id: req.query.id
	    }, function(err, user) {
	    	console.log('User is: ');
	    	console.log(user);
	    	res.json({
				data: {
					"user": user
				}
			});
	    });
	});

	apiRoutes.delete('/user/:id?', function(req, res) {
		console.log('Deleting for the User with specified ID.' + req.query.id);
		console.log(req.query.id);
	    User.remove({
	    	_id: req.query.id
	    }, function(err, user) {
	    	console.log('User deleted successfully.');
	    	res.json({
				data: {
					"status": 200,
					"reason": 'User deleted successfully.'
				}
			});
	    });
	});

	apiRoutes.put('/user/:id?', function(req, res) {
		console.log('Updating the User with specified ID.' + req.query.id);
		console.log(req.query.id);
		console.log(req.body.name);
	    User.findOneAndUpdate({
	    	_id: req.query.id
	    }, {
	    	name: req.body.name + ' Sr'
	    }, function(err, user) {
	    	console.log('User is: ');
	    	console.log(user);
	    	res.json({
				data: {
					"status": 200,
					"user": user
				}
			});
	    });
	});

	apiRoutes.post('/user', function(req, res) {
		console.log('Adding a User with POST');
		var newUser = new User({ 
			name: 'Yemisi', 
			password: 
			'yemisipwd'
		});
		newUser.save(function(err) {
		    if (err) throw err;
		    console.log('newUser successfully updated!');
		    res.json({
				data: {
					"user": newUser
				}
			});
		});
	});
	
	apiRoutes.get('/userss', function(req, res) {
		console.log('Querying for the Users list.');
	    User.find({}, function(err, users) {
	    	console.log('Users list is: ');
	    	console.log(users);
	    	res.json({
				data: {
					"users": users
				}
			});
	    });
	});
};