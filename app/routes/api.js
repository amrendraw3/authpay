// Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
				Model  = require('../models/model'),
				Token  = require('../models/token'),
				User   = require('../models/user'),
				uuidv4 = require('uuid/v4'),
				bcrypt = require('bcrypt');

	// Example API route
	app.get('/models', function(req, res) {

		// Checks the model collection and returns all of them`
		Model.find(function(err, models) {

			// returns all people in JSON format
			res.send(models);
		});
	});

	// Example POST route
	app.post('/models', function (req, res) {
		Model.create({
			name : req.body.name // Bound using Angular
		}, function(err, model) {
			if(err) {
				res.send(err);
			}

			Model.find(function(err, models) {
				res.send(models);
			});
		});
	});

	// Example DELETE route
	app.delete('/models/:model_id', function (req, res) {
		Model.remove({
			_id: req.params.model_id
		}, function(err, model) {
			if(err) {
				res.send(err);
			}

			Model.find(function(err, models) {
				res.send(models);
			});
		});
	});

	// USER APIs
	app.get('/users', async function(req, res) { // Get all users
		res.send( await User.find({}).sort({_id: -1}));
	});
	app.post('/users', async function (req, res) { // Create user
		var token = await Token.findOne({isUsed: false}).sort({_id: -1}); // Last unused token
		User.create({
			name    : req.body.name,
			username: req.body.username,
			password: await bcrypt.hash(req.body.password, 10), // TODO: use bcrypt
			email   : req.body.email,
			tokenId	: token.toJSON()._id
		}, async function(err, user) {
			if(err) { res.send(err); }
			else {
				await Token.findByIdAndUpdate(token.toJSON()._id, {isUsed: true});
				res.send(user);
			};
		});
	});

	// TOKEN APIs
	app.get('/tokens', async function(req, res) { // Get all tokens
		res.send( await Token.find({}).sort({_id: -1}));
	});

	// PAYMENT APIs
	app.get('/payments', async function(req, res) { // Get all payments
		res.send( await Payments.find({}).sort({_id: -1})); // TODO: Create payment model
	});
	app.post('/payments', function (req, res) { // Create payment
		Token.create({
			token: uuidv4()
		}, function(err, token) {
			if(err) { res.send(err); }
			res.send(token);
		});
	});
}