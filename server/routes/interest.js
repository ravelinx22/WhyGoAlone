var router = require("express").Router();
var mongoose = require('mongoose');
var config = require("../../config/database.js");
var Interest = require("../models/Interest");
var User = require("../models/User");


router.post('/', function (req, res) {

	var newInterest = new Interest({
		date: req.body.date,
		message: req.body.message,
		venue: req.body.venue,
		person: req.body.person
	});

	newInterest.save(function (err) {
		if (err) return handleError(err);
	});
});

module.exports=router;