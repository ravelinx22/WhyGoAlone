const mongoose = require('mongoose');

const InterestSchema = new mongoose.Schema({
	owner: {type: mongoose.Schema.Types.ObjectID, ref: 'User'},
	date: Date,
	message: String
	venue: {type: mongoose.Schema.Types.ObjectID, ref: 'Venue'}
})

module.exports = mongoose.model("Interest", InterestSchema);