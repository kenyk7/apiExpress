var mongoose = require('mongoose');

var MessagesFormatsSchema = new mongoose.Schema({
	name: String,
	campos: Array
});

mongoose.model('MessagesFormats', MessagesFormatsSchema);
