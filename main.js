Vue.component('card-select', {
	template:
		`<div id="card-select">
		<input type="text" v-model="cardName">
		<button v-on:click="play(cardName)">Play</button>
		</div>`,
	data: function() {
		return {
			cardName: '',
			cardsPlayed: []
		};
	},
	methods: {
		play: function(cardName) {
			this.cardsPlayed.push(cardName);
			this.cardName = '';
		}
	}
});

Vue.component('cards-played-list', {
	props: ['cardsPlayed'],
	template:
		`<ol id="cards-played-list">
			<li v-for="card in cardsPlayed">{{ card }}</li>
		</ol>`
});

let app = new Vue({
	el: '#app',
	data: {
		cardsPlayed: ['a', 'b']
	}
});