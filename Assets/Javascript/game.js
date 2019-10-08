var numberGuessed = [];
var guessesLeft = 10;
var wins = 0;
var computerGuess = Math.floor(Math.random() * 11) +1; 
var userGuess = event.key;



var computerGuess =
    String.fromCharCode(
        Math.floor(Math.random() * 11) +1
    );

console.log(computerGuess);
