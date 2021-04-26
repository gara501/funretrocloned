const mongoose = require('mongoose');
const BoardSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	created: {
		type: Date,
		default: Date.now()
	},
	columns: {
		type: Array,
		required: false
	},
	active: {
		type: Boolean,
		required: false,
		default: true
	}
});

module.exports = mongoose.model('Board', BoardSchema);