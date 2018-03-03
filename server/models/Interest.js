const mongoose = require('mongoose');

const InterestSchema = new mongoose.Schema({
	owner: {type: mongoose.Schema.Types.ObjectID, ref: 'User'},
	date: Date,
	message: String,
	venueID: String
})

module.exports = mongoose.model("Interest", InterestSchema);