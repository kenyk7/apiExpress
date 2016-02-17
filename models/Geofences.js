var mongoose = require('mongoose');

var GeofencesSchema = new mongoose.Schema({
	name: String,
	groups_count: Number,
	users_count: Number,
	path: Array
});

mongoose.model('Geofences', GeofencesSchema);