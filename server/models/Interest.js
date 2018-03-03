const mongoose = require('mongoose');

const InterestSchema = new mongoose.Schema({
	person: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	date: Date,
	message: String,
	venueID: String
});

module.exports = mongoose.model("Interest", InterestSchema);