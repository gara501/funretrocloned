const mongoose = require('mongoose');
const CardSchema = mongoose.Schema({
	content: {
		type: String,
		required: true,
		trim: true
	},
  column: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Column'
	},
  liked: {
		type: Number,
		required: false
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

module.exports = mongoose.model('Card', CardSchema);
