
const { gql } = require('apollo-server');

const typeDefs = gql`
	type Board {
		id: ID
		name: String
		columns: [String]
		created: String
		active: Boolean
	}

	input BoardInput {
		name: String!
		created: String!
		columns: [String]
		active: Boolean!
	}

	type Column {
		id: ID
		content: String
		color: String
		created: String
		active: Boolean
	}

	input ColumnInput {
		content: String!
		color: String!
		created: String!
		active: Boolean!
	}

	type Card {
		id: ID
		content: String!
		column: String
		liked: Int
		created: String
		active: Boolean
	}

	input CardInput {
		content: String!
		column: String!
		liked: Int!
		created: String!
		active: Boolean!
	}

	type Query {
		getBoards: [Board]
		getColumns: [Column]
		getCards: [Card]
	}

	type Mutation {
		createBoard(input: BoardInput):Board
		updateBoard(id: ID!, input: BoardInput): Board
		deleteBoard(id: ID!): Board
		createColumn(input: ColumnInput):Column
		updateColumn(id: ID!, input: ColumnInput): Column
		deleteColumn(id: ID!): Column
		createCard(input: CardInput):Card
		updateCard(id: ID!, input: CardInput): Card
		deleteCard(id: ID!): Card
	}
`;

module.exports = typeDefs;