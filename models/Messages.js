var mongoose = require('mongoose');

var MessagesSchema = new mongoose.Schema({
	message: String,
	coordinates: { latitude: String, longitude: String },
	dates: { sent_date: Date.now, received_date: Date, read_date: Date },
});

mongoose.model('Messages', MessagesSchema);