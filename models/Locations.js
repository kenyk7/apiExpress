var mongoose = require('mongoose');

var LocationsSchema = new mongoose.Schema({
	full_name: String,
	path: Array,
	telephone: String,
	last_datetime: { type: Date, default: Date.now },
	kit: { battery: Number, wifi: Boolean, data: Boolean, gps: Boolean},
	state: String
});

mongoose.model('Locations', LocationsSchema);