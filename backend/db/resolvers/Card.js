const Card = require('../models/Card');

const CardResolver = {
	Query: {	
		getCards: async() => {
			try {
				const cards = await Card.find({});
				
				return cards;
			} catch (error) {
				console.log(error);
			}
		},
	},
	Mutation: {
		createCard: async(_, {input}, ctx) => {
			try {
			
				const card = new Card(input);
				const result = await card.save();
				return result;
				
			} catch (error) {
				console.log(error);
			}
		},
		updateCard: async(_, {id, input}) => {
			let card = await Card.findOne({_id: id});

			if(!card) {
				throw new Error('Card didnt exist!');
			}
			
			card = await Card.findOneAndUpdate({_id: id}, input, {new: true});
			return card;
		},
		deleteCard: async(_, {id}) => {
			let card = await Card.findById(id);

			if(!card) {
				throw new Error('Card doesnt exist!');
			}

			card = await Card.findOneAndDelete({_id: id});
			return "Card deleted";
		}
	}
}

module.exports = CardResolver;