var router = require("express").Router();
var mongoose = require('mongoose');
var config = require("../../config/database.js");
var Interest = require("../models/Interest");
var User = require("../models/User");


router.post('/', function (req, res) {

	var newInterest = new Interest({
		message: req.body.message,
		venue: req.body.venue,
		person: req.body.person
	});

	newInterest.save(function (err) {
		if (err) return handleError(err);
	});

	User.findById(req.body.person, function (err, user) {
		if (err) return handleError(err);
		user.interests.push(newInterest);
		user.save(function (err, updatedUser) {
			if (err) return handleError(err);

		});
	});

	res.json(newInterest);
});

router.get("/user/:userId", function(req, res) {

	User.findById(req.params.userId.replace(/\s/g,'')).
	populate('interests').
	exec(function (err, user) {
		if (err) return handleError(err);

		res.interests = user.interests;
		res.send(user.interests);
	});
});


router.get("/venue/:venueId", function(req, res) {

	User.find({}).
	populate('interests').
	exec(function (err, users) {
		if (err) return handleError(err);
		let afterFilter = users.filter(function(u){

			let c = u.interests.filter(function(i){
				return i.venue === req.params.venueId;
			});

			return c.length > 0;
		});

		res.users = afterFilter;
		res.send(afterFilter);
	});
});

module.exports=router;