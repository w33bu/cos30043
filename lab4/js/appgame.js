var app = new Vue({
  el: '#app',
  data: {
	guess: null,
	randomNumber: null,
	message: 'Start guessing',
	gameOver: false
  },
  methods: {
	generateRandomNumber: function() {
	this.randomNumber = Math.floor(Math.random() * 100) + 1;
	},
	checkGuess: function() {
	if (this.guess == this.randomNumber) {
	this.message = 'You got it!';
	this.gameOver = true;
	} else if (this.guess < this.randomNumber) {
	this.message = 'Guess higher';
	} else {
	this.message = 'Guess lower';
	}
},
	giveUp: function() {
	this.message = 'The number was ' + this.randomNumber;
	this.gameOver = true;
	},
	startOver: function() {
	this.guess = null;
	this.randomNumber = null;
	this.message = 'Start guessing';
	this.gameOver = false;
	this.generateRandomNumber();
	}
  },
  mounted: function() {
	this.generateRandomNumber();
  }
});
