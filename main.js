let cardsPlayed = [];

let cardSelectApp = new Vue({
	el: '#card-select,'
	data: {
		cardName: '',
	},
	methods: {

	}
})

let cardsPlayedListApp = new Vue({
	el: '#cards-played-list',
	data: {
		cardsPlayed: cardsPlayed
	}
});