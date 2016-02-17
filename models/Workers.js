var mongoose = require('mongoose');

var WorkersSchema = new mongoose.Schema({
	full_name: String,
	telephone: Number,
	group: { id: String, name: String },
	geofence: { id: String, name: String },
	kit: { brand: String, version: String },
	state: String
});

mongoose.model('Workers', WorkersSchema);