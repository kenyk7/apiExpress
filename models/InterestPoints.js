var mongoose = require('mongoose');

var InteresPointsSchema = new mongoose.Schema({
	name: String,
	icon: String,
	description: String,
	coordinates: { latitude: String, longitude: String },
	group: { id: String, name: String, color: String },
	code: String
});

mongoose.model('InteresPoints', InteresPointsSchema);