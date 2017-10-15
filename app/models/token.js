var mongoose = require('mongoose'),
Schema = mongoose.Schema;

// Validation helper methods should return booleans
// and should be defined before the schema for readability


// Token Schema
var TokenSchema = new Schema ({
	token : { type: String },
	isUsed: { type: Boolean, default: false}
}, {timestamps: true});

module.exports = mongoose.model('Token', TokenSchema);