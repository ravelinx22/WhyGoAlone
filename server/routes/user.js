var router = require("express").Router();
var User = require("../models/User");
var mongoose = require("mongoose");
var jwt = require('jsonwebtoken');
var config = require("../../config/database.js");

// Authentication
router.post('/signUp', function(req, res) {
	var newUser = new User({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		email: req.body.email,
		cell: req.body.cell,
		password: req.body.password
	});

	newUser.save(function(err) {
		if(err){ throw err
			console.log(err);
		};
		var token = jwt.sign({}, config.secret,  {
          expiresIn: "24h"
        });

		res.json({
			success: true,
			token: token
		});
	});
});

router.post('/signIn', function(req, res){
	User.findOne({
		email: req.body.email
	}, function(err, user){
		if(err) throw err;

		if(!user) {
			res.status(401);
			res.json({ success: false, message: 'Authentication failed. User not found.' });
		} else if(user) {
			if(user.password != req.body.password) {
				res.status(401);
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			} else {
				var token = jwt.sign({}, config.secret, {
					expiresIn: "24h"
				});

				res.json({
					success: true,
					token: token
				});
			}
		}
	})
});

module.exports = router;
