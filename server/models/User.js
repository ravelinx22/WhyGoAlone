const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	cell: Number,
	password: String,
	//interests: [{type: mongoose.Schema.Types.ObjectID, ref: 'Interest'}]
});

module.exports = mongoose.model("User", UserSchema);
