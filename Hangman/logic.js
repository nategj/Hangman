var gamesList = ["persona", "metalgear", "bioshock"];

var chosenWord = '';

var lettersInChosenWord= [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

//functions //
function startGame() {

	numGuesses = 9;
	chosenWord = gamesList[Math.floor(Math.random() * gamesList.length)];
	lettersInChosenWord = chosenWord.split("");
	numBlanks = lettersInChosenWord.length;
	console.log(chosenWord);

	// sets score back to 0 //
	blanksAndSuccesses = [];
	wrongGuesses = [];
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	console.log(blanksAndSuccesses);

	// sets guesses to 9 //
	document.getElementById("guesses-left").innerHTML = numGuesses;
	// prints guesses //  
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	//prints wrong guesses//
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

// new function //
function checkLetters(letter) {
	var letterInWord = false;

	for (var i=0; i < numBlanks; i++) {
		if (chosenWord[i] === letter) {
			letterInWord = true;
		}
	}


	if (letterInWord) {
		for (var j=0; j < numBlanks; j++) {
			if (chosenWord[j] === letter) {
				blanksAndSuccesses[j] = letter;
			}
		}
		console.log(blanksAndSuccesses);
	} 

	else {
		wrongGuesses.push(letter);
		numGuesses--;
	}
}

// win and lose function //
function roundComplete() {
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + 
		" | NumGuesses: " + numGuesses);

	document.getElementById("guesses-left").innerHTML = numGuesses;
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

	if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
		winCounter++;
		alert("You win!");

		document.getElementById("win-counter").innerHTML = winCounter;

		startGame();
	}

	else if (numGuesses === 0) {
		lossCounter++;
		alert("You lose");

		document.getElementById("loss-counter").innerHTML = lossCounter;

		startGame();
	}
}




startGame();

// press any key to start game //
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
};