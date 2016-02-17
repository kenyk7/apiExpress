var mongoose = require('mongoose');

var InteresGroupsSchema = new mongoose.Schema({
	name: String,
	color: String,
	user_count: Number
});

mongoose.model('InteresGroups', InteresGroupsSchema);