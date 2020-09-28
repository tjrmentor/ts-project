let cardsPlayed = [];

let cardSelectApp = new Vue({
	el: '#card-select',
	data: {
		cardName: '',
		cardsPlayed: cardsPlayed
	},
	methods: {
		play: function(cardName) {
			cardsPlayed.push(cardName);
			this.cardName = '';
		}
	}
})

let cardsPlayedListApp = new Vue({
	el: '#cards-played-list',
	data: {
		cardsPlayed: cardsPlayed
	}
});