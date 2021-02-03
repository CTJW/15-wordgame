import { commonWords } from "./constants";

// console.log(commonoWords);

// const randomWord = commonWords  ;

// - The app starts by choosing a random word
// *underscores appear
// *number of underscores = num of letters in random word
// *6 stars = full life
// *until num of guess is up

const threeLetterWords = commonWords.filter(function (word) {
  word.length >= 3;

  for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      wordDisplay = " ";
    } else {
      return (wordDisplay = "_");
    }
  }
  //   console.log(threeLetterWords);
});

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
let roundedNumber = Math.round(getRandomArbitrary(0, 76));

let wordDisplay = (document.querySelector("#word-display").innerHTML =
  threeLetterWords[roundedNumber]);

// - The player can guess a single letter at a time
// *By clicking a button
// *If the letter clicked is in the word update underscore
// *OR*
// *If letter they click is NOT in the word lose a star
// *They enter again
//*Cannot choose same letter twice

// - The player has a fixed number of turns
// *6 wrong guesses game ends
// *alert, you lose
// *reset game ... exclude previous word

// *in which to guess all of the letters in the word
// *If word is filled out, game ends
// *alert, you win.
// *rest game ... exclude previous word

// - The app should indicate when the player has won or lost
