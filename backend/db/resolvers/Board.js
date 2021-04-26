const Board = require('../models/Board');

const BoardResolver = {
	Query: {	
		getBoards: async() => {
			try {
				const boards = await Board.find({});
				
				return boards;
			} catch (error) {
				console.log(error);
			}
		},
	},
	Mutation: {
		createBoard: async(_, {input}, ctx) => {
			try {
				const {name} = input;
				const boardExists = await Board.findOne({name});
				if (boardExists) {
					throw new Error('Board duplicated!');
				}
				
				const board = new Board(input);
				const result = await board.save();
				return result;
				
			} catch (error) {
				console.log(error);
			}
		},
		updateBoard: async(_, {id, input}) => {
			let board = await Board.findOne({_id: id});
			
			if(!board) {
				throw new Error('Board didnt find!');
			}
			
			board = await Board.findOneAndUpdate({_id: id}, input, {new: true});
			
			return board;
		},
		deleteBoard: async(_, {id}) => {
			let board = await Board.findById(id);

			if(!board) {
				throw new Error('Board doesnt exist!');
			}

			board = await Board.findOneAndDelete({_id: id});
			return "Board deleted";
		}
	}
}

module.exports = BoardResolver;