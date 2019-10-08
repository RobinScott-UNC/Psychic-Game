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

document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode);
    addNumber(keyPress);
}


function addNumber (usersKeypress) {

     var repeatGuess = numberGuessed.some(function(item){
        return item === usersKeypress;
    })

    if (repeatGuess) {
        alert(usersKeypress + " already guessed. Try again!");

    } else {
        numberGuessed.push(usersKeypress);
        console.log(numberGuessed);

        shownumberGuessed();

        guessMatch(usersKeypress);
    }

}

function shownumberGuessed() {
    var tempStr = numberGuessed.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("You win!");
        wins = wins + 1;
        showWins();

    } else if (guessesLeft === 0) {
        alert("You lose. Play again.");
        resetVariables ();

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}













