const mongoose = require('mongoose')
require('dotenv').config({path: '../variables.env'})

const connectDB = async() => {
	try {
		await mongoose.connect(process.env.DB_MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		});
		console.log('Connected');
	} catch (error) {
		console.log('error', error)
		process.exit(1); // Stop app if error
	}
}

module.exports = connectDB;