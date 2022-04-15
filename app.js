/* GAME FUNCTION
  - Player must guess a number between a min and max
  - Player gets a certain amount of guesses
  - Notify player of guesses remaining
  - Notify the player of the correct answer if they lose
  - let player choose to play again
  */

// Game Values
let min = 1;
let max = 10;
let winningNum = 2 //need to create a function that will generate a random number
let guessesLeft = 3;


// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Event Listener
guessBtn.addEventListener('click', function(e){
  e.preventDefault();
  let guess = parseInt(guessInput.value);
  
  // Validating a correct value was entered
  // This functionality should ensure that only the parameters I've set can be entered. If a value outside the parameters is entered, or no value at all, the Message will display in red 'Please enter a number between " " and " ". This can be tested by entering any number outside 1-10 and clicking submit or entering no number at all and clicking submit
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // console.log(guessInput.value)


  // Checking if player guessed the right number
  // This functionality will create a green border around the box to let the player know they've won, with a message stating they've won in green as well! We can test this by entering the number 2, as indicated by winningNum variable above. (Will incorporate more advanced functionality later)
  if(guess === winningNum){
    // Game Over, you won!
    // Disable Input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is Correct! YOU WON!!!`, 'green');

  } else {
    // Wrong Number
    guessesLeft = guessesLeft -1; // guessesLeft -=1??? Works, but don't know if this is a correct way to refactor this

    if(guessesLeft === 0){
    // Game Over - you lose

    // Disable Input
    guessInput.disabled = true;

    // Change Border Color
    guessInput.style.borderColor = 'red';

    // Set Message
    setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
    
    } else {
      // Game Continues - answer wrong

      // Change Border Color
      guessInput.style.borderColor = 'red';

      // Disable Input
      guessInput.value = '';

      // Tell user answer was incorrect
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
    }
  }
});

// Set Message Function
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

// If player guesses wrong number, will notify player that their answer was not correct and tell them how many guesses they have left.
