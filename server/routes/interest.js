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
		console.log(user.interests);
		user.interests.push(newInterest);
		console.log(user.interests);
		user.save(function (err, updatedUser) {
			if (err) return handleError(err);

		});
	});
});

module.exports=router;