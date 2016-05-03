var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
	full_name: String,
	email: String,
	username: String,
	telephone: String,
	status: String,
	group: Array
});

mongoose.model('Users', UsersSchema);