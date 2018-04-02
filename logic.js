var gamesList = ['persona', 'metal gear', 'bastion']

var chosenWord = '';

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuess = "";

/* Counters */
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

/*functions */
function startgame() {
numGuesses =9;
chosenWord = gamesList[math.floor(math.random() + 
	gamesList.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
console.log(chosenWord);

/* sets score back to 0 */
blanksAndSuccesses = [];
wrongGuesses = [];
for (var i = 0; i < numBlanks i++) {
	blanksAndSuccesses.push("_");
	}
	console.log(blanksAndSuccesses)

/* sets guesses to 9 */
document.getElementById("guesses left").innerHTML = numGuesses
/* prints guesses */                               /* what ever is in the ("") is how it will be seperated */
document.getElementById("word blanks").innerHTML = blanksAndSuccesses.join(" ")
/*prints wrong guesses*/
document.getElementById("wrong guesses").innerHTML = wrongGuesses.join(" ")
}

/* new function */
function checkletters(letter){
	var letterInward = false
	for (var i = 0; i < numBlanks; i++) {
		if (chosenWord[i] === letter) {
			letterInward = true 
		}
	}
	if (letterInward) {
		for (var j = 0 j < numBlanks j++) {
			if (chosenWord[j] === letter){
				blanksAndSuccesses[j] = letter;
			}
		}
	console.log(blanksAndSuccesses)
	}
	else {
		wrongGuesses.push(letter);
		numGuesses --;
	}
}

/* win and lose function */
function roundComplete() {
	console.log("WinCount: " + winCounter + " | LossCount " + lossCounter + " | NumGuesses" + numGuesses);

	/* sets guesses to 9 */
	document.getElementById("guesses left").innerHTML = numGuesses
	/* prints guesses */                               /* what ever is in the ("") is how it will be seperated */
	document.getElementById("word blanks").innerHTML = blanksAndSuccesses.join(" ")
	/*prints wrong guesses*/
	document.getElementById("wrong guesses").innerHTML = wrongGuesses.join(" ")

	if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
		winCounter ++;
		alert("You Win!");
		document.getElementById("win-counter").innerHTML = winCounter;

		startGame();
	}
	else if (numGuesses === 0) {
		lossCounter ++;
		alert("You Lose!");
		document.getElementById("loss-counter").innterHTML = lossCounter;

		startGame();
	}
}


startGame();



document.onkeyup = function(event) {
	var letterGuessed = string.fromCharCode(event.keyCode).toLowerCase();
	checkletters(letterGuessed);
	roundComplete();
};