var router = require("express").Router();
var mongoose = require('mongoose');
var Interest = require("../models/Interest");


router.get('/', function (req, res) {

	mongoose.connect('mongodb://localhost:27017/prueba');

	var newInterest = new Interest({
		owner: 5135315531,
		date: "12/12/12",
		message: "Hola",
		venue: "3145345"
	});

	newInterest.save(function (err) {
		if (err) return handleError(err);
	})
	res.send("Ala");

});


module.exports=router;