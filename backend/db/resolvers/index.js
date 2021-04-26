const boardResolver = require('./Board');
const columnResolver = require('./Column');
const cardResolver = require('./Card');

const resolvers = {
	Query: {
		getBoards: boardResolver.Query.getBoards,
		getColumns: columnResolver.Query.getColumns,
		getCards: cardResolver.Query.getCards
	},
	Mutation: {
		createBoard: boardResolver.Mutation.createBoard,
		updateBoard: boardResolver.Mutation.updateBoard,
		deleteBoard: boardResolver.Mutation.deleteBoard,
		createColumn: columnResolver.Mutation.createColumn,
		updateColumn: columnResolver.Mutation.updateColumn,
		deleteColumn: columnResolver.Mutation.deleteColumn,
		createCard: cardResolver.Mutation.createCard,
		updateCard: cardResolver.Mutation.updateCard,
		deleteCard: cardResolver.Mutation.deleteCard
	}
}

module.exports = resolvers;