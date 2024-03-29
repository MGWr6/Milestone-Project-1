// Game Values
let min = 1;
let max = 10;
let winningNum = getRandomNumber(min, max);
let guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');
// const container = document.querySelector('.container')

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Event Listener
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  // console.log(guess);

  // Validating a correct input was entered
  // This functionality should ensure that only the parameters I've set can be entered. If a value outside the parameters is entered, or no value at all, the Message will display in red 'Please enter a number between " " and " ". This can be tested by entering any number outside 1-10 and clicking submit or entering no number at all and clicking submit

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    // console.log(guessInput.value)
    // Checking if player guessed the right number
    // This functionality will create a green border around the box to let the player know they've won, with a message stating they've won in green as well! We can test this by entering the number 2, as indicated by winningNum variable above. (Will incorporate more advanced functionality later)
    if (guess === winningNum) {
      gameOver(true, `${winningNum} is correct! YOU WIN!!!`);
    } else {
      // Wrong Number
      guessesLeft -= 1;

      if (guessesLeft === 0) {
        // Game Over - you lose
        gameOver(
          false,
          `Game Over, you lost. The correct number was ${winningNum}.`
        );
      } else {
        // Game Continues - answer wrong

        // Change Border Color
        guessInput.style.borderColor = 'red';

        // Disable Input
        guessInput.value = '';

        // Tell user answer was incorrect
        setMessage(
          `${guess} is not correct, ${guessesLeft} guesses left.`,
          'red'
        );
      }
    }
  }
});

// Play again event Listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // Disable Input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play Again?
  guessBtn.value = 'Play Again?';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  // console.log(Math.floor(Math.random()*(max-min+1)+min)); // 10 takeaway 9 + 1 = 10
}

// Set Message Function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// html input attribute minlength = '1'
