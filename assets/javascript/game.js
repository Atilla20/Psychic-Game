
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var lettersGuessed = [];

//empty array to store guesses


//computer guess




document.onkeyup = function(event) {
	var userGuess = event.key;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	var key = event.key.toLowerCase();



	if(userGuess === computerGuess) {
		wins++;
		guessesLeft = 9;
		string = [];
		lettersGuessed.length = 0;
		

	} else {

		guessesLeft--;
		lettersGuessed.push(key);
		var string = lettersGuessed.join(',');
		


}	
		

	if (guessesLeft === 0) {

		losses++;
		guessesLeft = 9;
		string = [];
		lettersGuessed.length = 0;
		
		
}

	var html=
		"<p>wins:" + wins + "</p>" +
		"<p>losses:" + losses + "</p>" +
		"<p>number of guesses left:" + guessesLeft + "</p>" +
		"<p>Guesses:" + string + "</p>";

		document.querySelector("#game").innerHTML = html;
};

