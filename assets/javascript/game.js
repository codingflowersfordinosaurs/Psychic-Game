
// Create a variable 'computerChoices'; will hold alphabet in the array
var computerChoices = ['a','b','c,','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s,','t','u','v','w','x','y','z'];

// Set variables equal to 0 and start guessesleft at 9
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userChoices = []; // empty array to push userChoices to

// Create variables for wins, losses, guesses left, and guesses so far by connecting them to the id's in index.html (using .getElementByID)
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var userChoicesText = document.getElementById("userChoices-Text");

// Need to get user's key fxn; this will nest the rest of: var's for user guess(maybe comp's guess), if's, and updating text
document.onkeyup = function(event) {

  // variables for the User's guesses and and getting computer choices to be random
  var userGuess = event.key; //taking the user guess
  var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter

  // variable options, so i don't have to type indiv  ==== && and ||'s for each letter
  var options =['a','b','c,','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s,','t','u','v','w','x','y','z'];
  while (guessesLeft > 0 && guessesLeft < 10){

    if (options.indexOf(userGuess) > -1) { //maybe this isn't right.........
    //if userGuess = computerGuess then wins will go up +1, guessesLeft will stay the same, and userChoices will log the letter user chose
    if (userGuess === computerGuess) {
      wins++;
    }
    //if userGuess does not equal computerGuess then guessesLeft will go down -1, userChoices will log the letter user chose
    if (userGuess != computerGuess) {
      guessesLeft--;
      userChoices.push(userGuess);
    }
    //if guessesLeft = 0 then guessesLeft will go back to 9, losses will go up +1, and userChoices will clear out 
    if (guessesLeft === 0) {
      // guessesLeft = 9;
      losses++;
      // userChoices.length = 0;
    }

  }
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  userChoicesText.textContent = "Your guesses so far: " + userChoices;

}

  // // this if holds...
  // if (options.indexOf(userGuess) > -1) { //maybe this isn't right.........
  //   //if userGuess = computerGuess then wins will go up +1, guessesLeft will stay the same, and userChoices will log the letter user chose
  //   if (userGuess === computerGuess) {
  //     wins++;
  //   }
  //   //if userGuess does not equal computerGuess then guessesLeft will go down -1, userChoices will log the letter user chose
  //   if (userGuess != computerGuess) {
  //     guessesLeft--;
  //     userChoices.push(userGuess);
  //   }
  //   //if guessesLeft = 0 then guessesLeft will go back to 9, losses will go up +1, and userChoices will clear out 
  //   if (guessesLeft === 0) {
  //     // guessesLeft = 9;
  //     losses++;
  //     // userChoices.length = 0;
  //   }
 
  //   winsText.textContent = "Wins: " + wins;
  //   lossesText.textContent = "Losses: " + losses;
  //   guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  //   userChoicesText.textContent = "Your guesses so far: " + userChoices;

  // }
}
