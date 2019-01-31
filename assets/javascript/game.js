
// Create a variable 'computerChoices'; will hold alphabet in the array
var computerChoices = ['a','b','c,','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s,','t','u','v','w','x','y','z'];

// Set variables equal to 0 and start guessleft at 10(or any number)
var wins = 0;
var losses = 0;
var guessLeft = 10;
var userGuesses = [];

// Create variables for wins, losses, guesses left, and guesses so far by connecting them to the id's in index.html (using .getElementByID)
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessLeft-text");
var userGuessesText = document.getElementById("userGuesses-Text");

// Need to get user's key fxn; this will nest the rest of: var's for user guess(maybe comp's guess), if's, and updating text
document.onkeyup = function(event) {

  // variables for the User's guesses and and getting computer choices to be random
  var userGuesses = event.key;
  var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];

  if ((userGuesses === 'a') || (userGuesses === 'b') || (userGuesses === 'c') || (userGuesses === 'd') ||
  (userGuesses === 'e') || (userGuesses === 'f') || (userGuesses === 'g') || (userGuesses === 'h') || (userGuesses === 'i') ||
  (userGuesses === 'j') || (userGuesses === 'k') || (userGuesses === 'l') || (userGuesses === 'm') || (userGuesses === 'n') ||
  (userGuesses === 'o') || (userGuesses === 'p') || (userGuesses === 'q') || (userGuesses === 'r') || (userGuesses === 's') ||
  (userGuesses === 't') || (userGuesses === 'u') || (userGuesses === 'v') || (userGuesses === 'w') || (userGuesses === 'x') ||
  (userGuesses === 'y') || (userGuesses === 'z')) {
    if ((userGuesses === 'a') && (computerGuess === 'a') || (userGuesses === 'b') && (computerGuess === 'b') || 
    (userGuesses === 'c') && (computerGuess === 'c') || (userGuesses === 'd') && (computerGuess === 'd') ||
    (userGuesses === 'e') && (computerGuess === 'e') || (userGuesses === 'f') && (computerGuess === 'f') ||
    (userGuesses === 'g') && (computerGuess === 'g') || (userGuesses === 'h') && (computerGuess === 'h') ||
    (userGuesses === 'i') && (computerGuess === 'i') || (userGuesses === 'j') && (computerGuess === 'j') ||
    (userGuesses === 'k') && (computerGuess === 'k') || (userGuesses === 'l') && (computerGuess === 'l') ||
    (userGuesses === 'm') && (computerGuess === 'm') || (userGuesses === 'n') && (computerGuess === 'n') ||
    (userGuesses === 'o') && (computerGuess === 'o') || (userGuesses === 'p') && (computerGuess === 'p') ||
    (userGuesses === 'q') && (computerGuess === 'q') || (userGuesses === 'r') && (computerGuess === 'r') ||
    (userGuesses === 's') && (computerGuess === 's') || (userGuesses === 't') && (computerGuess === 't') ||
    (userGuesses === 'u') && (computerGuess === 'u') || (userGuesses === 'v') && (computerGuess === 'v') ||
    (userGuesses === 'w') && (computerGuess === 'w') || (userGuesses === 'x') && (computerGuess === 'x') ||
    (userGuesses === 'y') && (computerGuess === 'y') || (userGuesses === 'z') && (computerGuess === 'z'));
    } else {
    losses++;
    guessLeft--;
    }
 
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessLeftText.textContent = "Guesses Left: " + guessLeft;
    userGuessesText.textContent = "Your guesses so far: " + userGuesses;

  }

