'use strict';

let randomNumber = Math.trunc(Math.random() * 20);
let guessedNumber = 0;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = randomNumber;
const userMessage = function (mensagem) {
  document.querySelector('.message').textContent = mensagem;
};

document.querySelector('.check').addEventListener('click', function () {
  guessedNumber = Number(document.querySelector('.guess').value);
  if (guessedNumber <= 0 || guessedNumber > 20) {
    userMessage('Not a valid Number! Try again.');
  } else if (guessedNumber === randomNumber) {
    userMessage('You Win 🎉');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessedNumber < randomNumber) {
    userMessage('TOO LOW 📉');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    userMessage('TOO HIGH 📈');
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.btn').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#3e97d2';
  document.querySelector('.number').textContent = '?';
  guessedNumber = Number((document.querySelector('.guess').value = ''));
  document.querySelector('.score').textContent = 20;
  randomNumber = Math.trunc(Math.random() * 20);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
});
