const mongoose = require('mongoose');
const CommentSchema = mongoose.Schema({
	content: {
		type: String,
		required: true,
		trim: true
	},
	card: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Card'
	},
});

module.exports = mongoose.model('Comment', CommentSchema);