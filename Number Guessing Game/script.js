let randomNumber = Math.floor(Math.random() * 100) + 1; // Creates a round Number between 1 and 100

const guesses = document.querySelector(".guesses"); // Selects the guesses "p"
const lastResult = document.querySelector(".lastResult"); // Selects the  lastResult "p"
const lowOrHi = document.querySelector(".lowOrHi"); // Selects the lowOrHi "p"

const guessSubmit = document.querySelector(".guessSubmit"); // Selects the Guess Submission input
const guessField = document.querySelector(".guessField");

let guessCount = 1; // Starts counting the guesses from one
let resetButton; // Variable for the reset button by the end of the game.
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:"; // Adds each new guess
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) { // Sets message if the user guesses right
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green"; // Changes the bckg's color to green
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) { // Sets the Game over message if user uses 10 guesses
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!"; // Sets the message if the user input is wrong
    lastResult.style.backgroundColor = "red"; // Changes the bckg's color to red
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!"; // Sets the message if the user input is too low
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";// Sets the message if the user input is too high
    }
  }

  guessCount++; // Increments the guess count each time until it reaches 10
  guessField.value = ""; //Empties the input field
  guessField.focus(); 
}
guessSubmit.addEventListener("click", checkGuess);

function setGameOver() { // Sets game Over Button
  guessField.disabled = true; // Disables the input field
  guessSubmit.disabled = true; 
  resetButton = document.createElement("button"); // Creates a button
  resetButton.textContent = "Start new game"; // Creates text destined to the new button
  document.body.append(resetButton); // Adds the reset button to the body
  resetButton.addEventListener("click", resetGame);
}
function resetGame() {
  guessCount = 1; // Restores the Count to 1

  const resetParas = document.querySelectorAll(".resultParas p"); 
  for (const resetPara of resetParas) { // Resets the guesses result field to 0
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false; // Enables the guess field
  guessSubmit.disabled = false; // Enables Submission field
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a new random number between 1 and 100
}