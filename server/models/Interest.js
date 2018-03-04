const mongoose = require('mongoose');

const InterestSchema = new mongoose.Schema({
	person: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	message: String,
	venue: String,
	created_at: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model("Interest", InterestSchema);