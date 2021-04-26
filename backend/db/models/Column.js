const mongoose = require('mongoose');
const ColumnSchema = mongoose.Schema({
	content: {
		type: String,
		required: true,
		trim: true
	},
  color: {
		type: String,
		required: true,
		trim: true
	},
	created: {
		type: Date,
		default: Date.now()
	},
	active: {
		type: Boolean,
		required: false,
		default: true
	}
});

module.exports = mongoose.model('Column', ColumnSchema);