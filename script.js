'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const show_score = function (input) {
  document.querySelector(input).textContent = score;
};
const display_message = function (message) {
  document.querySelector('.message').textContent = message;
};
const display_number = function (text) {
  document.querySelector('.number').textContent = text;
};
const body_changes_background = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    display_message(' ⛔ No Number ⛔ ');
  } else if (guess === number) {
    display_message('✨ Correct Number ✨ ');

    body_changes_background('#60b347');
    display_number(number);
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      show_score('.highscore');
    }
  } else if (guess !== number) {
    if (score > 1) {
      display_message(guess > number ? '  📈 Too high...' : '  📉 Too low...');
      score--;
      show_score('.score');
    } else {
      display_message(' ❌ You lose the game... ❌  ');
      score = 0;
      show_score('.score');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  display_message(' Start guessing...');
  body_changes_background('#222');
  document.querySelector('.number').style.width = '15rem';
  show_score('.score');
  display_number('?');
  document.querySelector('.guess').value = '';
});
