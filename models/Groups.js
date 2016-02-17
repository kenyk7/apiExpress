var mongoose = require('mongoose');

var GroupsSchema = new mongoose.Schema({
	name: String,
	users_count: Number
});

mongoose.model('Groups', GroupsSchema);