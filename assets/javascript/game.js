// Just a heads up!!! I'm really going off a website to help me out and I'm trying to put things into my own words to help me understand...
// We need to set our global var a-z as options for the user and computer to use...
  console.log('imhere')
  
  var computerOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

	var numberWins = 0;
	var numberLosses = 0;
	var numberGuesses = 9;
  var guessesLeft = 9;
	var guessedLetters = [];
  var letterToGuess = null;

// computer vs. user
// The computer needs to select a number for us to try and guess.
  var computerGuesses = computerOptions [Math.floor(Math.random() * computerOptions.length)];

// Now we'll need to set up the whole nine lives thing... Then Tie it back into the HTML...
  var updateGuesses = function() {
    document.getElementById("gressLeft").innerHTML = "Guesses left: " + guessesLeft;
  };
  var updateLettersToGuess = function() {
    this.letterToGuess = this.computerOptions[Math.floor(Math.random()* this.computerOptions.length)];
  };

// Now we need to keep track of what the user is putting down for His/Her Guesses...
  var updateGuessesSoFar = function() {
    document.querySelector("#let").innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
  };

  updateGuesses();

// This part is kinda confusing... 
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLettersToGuess();
  updateGuesses();
  updateGuessesSoFar();
}
  
  updateLettersToGuess();
  updateGuesses();

  // Now we need to create the function when the user lets go of the key it will be the users guess...
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuesses();
  updateGuessesSoFar();

        if (guessesLeft > 0) {
          if (userGuess == letterToGuess) {
            numberWins++;
            document.querySelector("#numberWins").innerHTML = "Wins: " + numberWins;
            alert("You are a Winner!")
            reset();
          }
        }
        else if (guessesLeft == 0) {
          numberLosses++;
          document.querySelector("#numberLosses").innerHTML = "Losses: " + numberLosses;
          alert("Sorry Bro... Try Again...");
          reset();
      } 

};












