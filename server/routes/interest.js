var router = require("express").Router();
var mongoose = require('mongoose');
var Interest = require("../models/Interest");


router.post('/', function (req, res) {

	mongoose.connect('mongodb://localhost:27017/prueba');

	var newInterest = new Interest({
		owner: req.body.owner,
		date: req.body.date,
		message: req.body.message,
		venue: req.body.venue
	});

	newInterest.save(function (err) {
		if (err) return handleError(err);
	})

});


module.exports=router;