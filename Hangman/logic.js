// array of words (all lower case)
var gamesList = ["persona", "metalgear", "bioshock"];

// computer selected solution will be here
var chosenWord = '';

//will breal the solution into individual letters to be strored in array 
var lettersInChosenWord= [];

//number of blanks we show based on the solution
var numBlanks = 0;

// holds a mix of blanks and solved letters
var blanksAndSuccesses = [];

// this holds the wrong guesses
var wrongGuesses = [];

// holds letters guessed
var letterGuessed = '';

// counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

//functions, how we'll start a restart the game 
function startGame() {
	// resets the guesses back to 0
	numGuesses = 9;
	// solution chosen randomly from word list
	chosenWord = gamesList[Math.floor(Math.random() * gamesList.length)];
	// breaks the word into individual letters
	lettersInChosenWord = chosenWord.split("");
	// counts the numbers of letters in the word
	numBlanks = lettersInChosenWord.length;
	// print out the solution in the console (testing purposes)
	console.log(chosenWord);

	// reset the guess and success array at each round
	blanksAndSuccesses = [];
	// reset the wrong guesses from the previous round
	wrongGuesses = [];
	// here we fill up the blanksAndSucesses list with teh approporiate number of blanks 
	//which is based on the number of letters in the solutions
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}
	// print the initial blanks in the console
	console.log(blanksAndSuccesses);

	// sets guesses to 9 
	document.getElementById("guesses-left").innerHTML = numGuesses;
	// prints guesses 
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	//prints wrong guesses
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

// new function //
function checkLetters(letter) {
	// a booleab which will be toggled based on wheather or not 
	// a user letter is found anywher in the word
	var letterInWord = false;

	for (var i=0; i < numBlanks; i++) {
		// if the letter exists then change this to true
		// it will be used in the next step
		if (chosenWord[i] === letter) {
			letterInWord = true;
		}
	}

	// If the letter exists somewhere in the word, 
	// then figure out exactly where (what index)
	if (letterInWord) {
		// Loop through the word
		for (var j=0; j < numBlanks; j++) {
			// Populate the blanksAndSuccesses with every
			// Instance of the letter
			if (chosenWord[j] === letter) {
				// Set specific blank spaces to equal the correct letter, 
				// when there is a match
				blanksAndSuccesses[j] = letter;
			}
		}
		// log for testing purposes
		console.log(blanksAndSuccesses);
	} 
	// If the letter doesnt exist at all ....
	else {
		// Then we add the letter to the list of wrong letters
		wrongGuesses.push(letter);
		// We also subtract one of the guesses
		numGuesses--;
	}
}

// code that needs to be ran after each guess is made
function roundComplete() {
	// initial status update telling us the wins, losses, and guesses left
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + 
		" | NumGuesses: " + numGuesses);

	// - HTML updates -

	// update the HTML to update the new number of guesses
	document.getElementById("guesses-left").innerHTML = numGuesses;
	// will print he array of guesses and blanks on the page
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	// will print the wrong guesses onto the page
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

	// If we guesses all the letters right 
	if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
		winCounter++;
		alert("You Win!");
		// update the win counter in the HTML
		document.getElementById("win-counter").innerHTML = winCounter;

		//restart the game
		startGame();
	}

	// if we've run out of guesses 
	else if (numGuesses === 0) {
		lossCounter++;
		alert("You lose");

		// updates the loss counter in the HTML 
		document.getElementById("loss-counter").innerHTML = lossCounter;

		// restart the game
		startGame();
	}
}



// - NAME PROCESS (This is the code that controls what is actually ran) -

// starts the game
startGame();

// initiates the function for capturing key clicks (press any key to start game) //
document.onkeyup = function(event) {
	// converts all key clicks to lowercase letters
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	// runs the code to check for correct guesses
	checkLetters(letterGuessed);
	// runs the code that ends each round
	roundComplete();
};