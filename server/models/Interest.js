const mongoose = require('mongoose');

const InterestSchema = new mongoose.Schema({
	person: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	date: Date,
	message: String,
	venue: String
});

module.exports = mongoose.model("Interest", InterestSchema);