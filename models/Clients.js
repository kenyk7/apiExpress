var mongoose = require('mongoose');

var ClientsSchema = new mongoose.Schema({
	name: String,
	email: String,
	telephone: String,
	address: String,
	status: String,
	coordinates: {
	    latitude: String,
	    longitude: String
	}
});

mongoose.model('Clients', ClientsSchema);