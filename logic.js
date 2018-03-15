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

}
startgame();