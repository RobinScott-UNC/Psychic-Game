var numberGuessed = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var guessesLeft = 10;
var wins = 0;
var computerGuess = Math.floor(Math.random() * 11); 

var answer = 7;

alert("Guess the number that the computer is thinking. You have 10 chances");

for (i = 0; i <11; i++) {
    if (answer == numberGuessed);
        alert=("CORRECT!"); 
        } 
        
    { else 
    numberGuessed = prompt("try again");
        
    }
