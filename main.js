Vue.component('region-tracker', {
	template: 
		`<div>
			<country-tracker v-for="country in countries"></country-tracker>
		</div>`,
	props: {
		regionName: String
	},
	data: function() {
		let region = regions.find(region => region.regionName === this.regionName);
		return {
			countries: region.countries
		}
	}
});

Vue.component('country-tracker', {
	template: `{{country.countryName}} | {{country.stability}}`,
	props: {
		regionName: String,
		countryName: String
	},
	data: function() {
		return { 
			country: null
		};
	},
	created: function() {
		this.country = regions.find(region => region.regionName === this.regionName).countries
			.find(country => country.countryName === this.countryName);
	}
});

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
	props: {
		cardsPlayed: Array
	},
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