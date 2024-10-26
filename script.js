"use strict";

const btnCheck = document.querySelector(".check");
let randomNumber = Math.floor(Math.random() * 20 + 1);
const labelScore = document.querySelector(".score");
const labelHighScore = document.querySelector(".highscore");
const btnAgain = document.querySelector(".again");
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  const labelMessage = document.querySelector(".message");
  labelMessage.textContent = message;
};

const checkNumber = () => {
  const numberInput = document.querySelector(".guess");
  const convertNumInput = +numberInput.value;
  if (score < 1) {
    alert("Your Game is Over !!! Please click again button to start again !!!");
    btnAgain.classList.remove("hidden");
  }
  if (convertNumInput > 20 || convertNumInput < 1) {
    alert("Please input a number between 1 - 20 !!!");
  } else {
    if (convertNumInput === randomNumber) {
      btnAgain.classList.remove("hidden");
      displayMessage("Correct Number!");
      document.body.classList.add("win");
      labelScore.textContent = score;
      btnCheck.innerText = "Congratulation";
      btnCheck.disabled = true;
      if (score > highScore) {
        highScore = score;
        labelHighScore.textContent = highScore;
      } else {
        highScore = highScore;
        labelHighScore.textContent = highScore;
      }
    } else {
      if (convertNumInput > randomNumber) {
        displayMessage("Too high!");
        score--;
      } else {
        displayMessage("Too low!");
        score--;
      }
    }
  }
  numberInput.value = "";
};

const restartGame = () => {
  displayMessage("Start guessing...");
  document.body.classList.remove("win");
  labelScore.textContent = 0;
  labelHighScore.textContent = highScore;
  btnCheck.innerText = "Check";
  btnAgain.classList.add("hidden");
  btnCheck.disabled = false;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
};

btnCheck.addEventListener("click", checkNumber);
btnAgain.addEventListener("click", restartGame);
