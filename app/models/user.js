var mongoose = require('mongoose'),
Schema = mongoose.Schema;

// Validation helper methods should return booleans
// and should be defined before the schema for readability


// Users Schema
var UserSchema = new Schema ({
	name    : { type: String },
	username: { type: String },
	password: { type: String },
	email   : { type: String },
	tokenId : { type: String, default: null}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);