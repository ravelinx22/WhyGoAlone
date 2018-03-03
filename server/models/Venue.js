const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
	name: String,
	adress: String,
	interested: [{type: Mongoose.Schema.Types.ObjectId, ref: 'Interest'}]
});

module.exports = mongoose.model("Venue", VenueSchema);