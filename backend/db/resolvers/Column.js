const Column = require('../models/Column');

const ColumnResolver = {
	Query: {	
		getColumns: async() => {
			try {
				const columns = await Column.find({});
				
				return columns;
			} catch (error) {
				console.log(error);
			}
		},
	},
	Mutation: {
		createColumn: async(_, {input}, ctx) => {
			try {
				const {content} = input;
				const columnExists = await Column.findOne({content});
				if (columnExists) {
					throw new Error('Column duplicated!');
				}
				
				const column = new Column(input);
				const result = await column.save();
				return result;
				
			} catch (error) {
				console.log(error);
			}
		},
		updateColumn: async(_, {id, input}) => {
			let column = await Column.findOne({_id: id});

			if(!column) {
				throw new Error('Column didnt find!');
			}
			
			column = await Column.findOneAndUpdate({_id: id}, input, {new: true});
			return column;
		},
		deleteColumn: async(_, {id}) => {
			let column = await Column.findById(id);

			if(!column) {
				throw new Error('Column doesnt exist!');
			}

			column = await Column.findOneAndDelete({_id: id});
			return "Columnd deleted";
		}
	}
}

module.exports = ColumnResolver;