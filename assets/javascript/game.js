
// Create a variable 'computerChoices'; will hold alphabet in the array
var computerChoices = ['a','b','c,','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s,','t','u','v','w','x','y','z'];

// Set variables equal to 0 and start guessesleft at 9
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

//CAPTURING THE PLAYER'S INPUT
// when the user presses a key, it will run the following function...
document.onkeyup = function(event) {

  // taking the user's guess
  var userGuess = event.key; 

  //GENERATING THE COMPUTER'S LETTER
  //generates random number (decimal from 0 to 1) which is multiplied by the length of computerChoices array
  //and then rounded down to the nearest whole number by the Math.floor method
  var computerLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 

  //HANDLING CORRECT GUESSES
    if (userGuess === computerLetter) {
      wins++;
      guessedLetters = [];
      guessesLeft = 9;
    }
    //HANDLING INCORRECT GUESSES
    //test if user guess Does Not Equal computerLetter and decriments attempts by 1
    if (userGuess != computerLetter) {
      guessesLeft--;
      guessedLetters.push(userGuess);
    }
    //when remaining attempts equals 0, losses is incrememented by 1; attempts is reset to 9, and guessedLetters array is cleared
    if (guessesLeft === 0) {
      guessesLeft = 9;
      losses++;
      guessedLetters = [];
    }
    //HANDLING INCORRECT GUESSES - OUTPUT
    //this 'if' prevents a letter selected a 2nd time from being written to the guessedLetters array again; still counts as a guess
    if (guessedLetters.indexOf(userGuess) >= 0) {

    } else {
      //this pushes the players incorrect guess to the guessedLetters array and writes it to the HTMl
      guessedLetters.push(userGuess);
      document.getElementById('guessedLetters') = guessedLetters;
      console.log(guessedLetters);
    }
    //OUTPUT TO HTML
    //Create variables for wins, losses, guesses left, and guesses so far by connecting them to the id's in index.html (using .getElementByID)
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");
    var guessedLettersText = document.getElementById("guessedLetters-Text");
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessedLettersText.textContent = "Your guesses so far: " + guessedLetters.push(', ');
  
}


