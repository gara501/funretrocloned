const { ApolloServer }= require('apollo-server');
const typeDefs = require('./db/schema/schema');
const jwt = require('jsonwebtoken');
const resolvers = require('./db/resolvers/index');
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
require('dotenv').config({path: 'config.env'});

const connectDB = require('./config/db');
connectDB();
/*
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({req}) => {
		// get token via headers to set trainer in the new client
		// This pass as a ctx (context) in the resolver
		const token = req.headers['authorization'] || '';
		if (token) {
			try {
				const user = jwt.verify(token, process.env.TOKEN);
				return {
					user
				}
			} catch (error) {
				console.log('Error, usuario no valido.')
			}
		}
	}
});
*/

const server = new ApolloServer({
	typeDefs,
	resolvers
})


server.listen().then(({url}) => {
	console.log('Server connected')
});