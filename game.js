import { commonWords } from "./constants";

// console.log(commonoWords);

// const randomWord = commonWords  ;

// - The app starts by choosing a random word
// *underscores appear
// *number of underscores = num of letters in random word
// *8 stars = full life
// *until num of guess is up

const threeLetterWords = commonWords.filter(function (word) {
  return word.length >= 3;
});

let roundedNumber = Math.round(getRandomArbitrary(0, 76));
let randomWord = threeLetterWords[roundedNumber];
let test = dash(randomWord);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function dash(str) {
  let hiddenWord = "";
  for (let i = 0; i < str.length; i++) {
    hiddenWord += " _ ";
  }
  return hiddenWord;
}

// console.log(test);
// let wordDisplay = (document.querySelector("#word-display").innerHTML =
//   threeLetterWords[roundedNumber]);

// - The player can guess a single letter at a time
// *By clicking a button
const btn = document.querySelector(".alphabtn");

let clickCount = 0;

function handleBtnClick(e) {
  let clickLetter = e.target.textContent;
  // console.log(e.target.textContent);
  // console.log(btn);
  if (clickCount >= 7) {
    // btn.setAttribute("disabled", true);
    // return;
    alert("You Lose!");
    location.reload();
  }
  clickCount++;
  // console.log(clickCount);
  // console.log(randomWord.includes(clickLetter));
}

let lifeCountDown = loseLife;
let countDown = 8;
const tracker = document.querySelector("#count");
tracker.innerHTML = countDown;

function loseLife(num) {
  if (clickCount) {
    countDown = 8;
  } else {
    countDown--;
    // console.log(lifeCountDown);
  }
}

// function loseLife(str) {
//   let countDown = countDown;
//   for (let i = 8; i >= 0; i--) {
//     countdown--;
//   }
//   return countDown;

//   console.log(lifeCountDown);
// }

//this makes my buttons
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphaArray = alphabet.split("");
let alphaHtml = alphaArray
  .map(function (alpha) {
    return `<button class="alphabtn">${alpha}</button>`;
  })
  .join("");

// console.log(alphaHtml);

document
  .querySelector("#button-list")
  .addEventListener("click", handleBtnClick);

document.querySelector("#button-list").innerHTML = alphaHtml;
document.querySelector("#dashes").innerHTML = test;
// *If the letter clicked is in the word update underscore
// *OR*
// *If letter they click is NOT in the word lose a star
// *They enter again
// *Cannot choose same letter twice

// - The player has a fixed number of turns
// *6 wrong guesses game ends
// *alert, you lose
// *reset game ... exclude previous word?

// - The app should indicate when the player has won or lost
