'use strict';
/*
console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = 'correct number ! ')
);

document.querySelector('.score').textContent = 13;
document.querySelector('.number').textContent = 20;

document.querySelector('.guess').value = 20;
**/
let secret = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // input wrong
  if (!guess || guess === 0 || guess > 20) {
    document.querySelector('.message').textContent =
      'No valid number selected!';
    // when the input is  correct
  } else if (guess === secret) {
    document.querySelector('.message').textContent = 'Correct number ! ';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secret;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when the input is bigger than the secret
  } else if (guess != secret) {
    if (score > 1 && guess > secret) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      // when the input is smaller than the secret
    } else if (score > 1 && guess < secret) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
    } else {
      // score == 0
      document.querySelector('.message').textContent = 'You lost';
      score = 0;
    }
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
});
