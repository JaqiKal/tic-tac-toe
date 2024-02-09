/**
 * Tic-Tac-Toe game
 *
 * This script manages the functionality of a Tic-Tac-Toe game in a web application.
 * Player take turns aginst computer marking Xs on a 3x3 grid with the objective of
 * aligning three of their symbols in a row to win. The script handles player
 * interactions, win conditions, and game resets.
 *
 * Features:
 * - Player turns and symbol tracking (X and O)
 * - Win condition checking for rows, columns, and diagonals
 * - Detection of a draw (cat's game) when the board is full
 * - Resetting the game for a new round
 * - Listen after feedback button submit and
 *   - redirect to form.index
 *
 * Credit:
 *  - Used MDN, w3school, Youtube & JavaScript & jQuery by Jon Ducket
 * to understand loops&iteration:
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 *  https://www.w3schools.com/js/js_loop_for.asp
 *  https://www.youtube.com/watch?v=orAS-MBh5f4
 *  https://javascriptbook.com/
 *
 *
 * Other:
 * - jshint esversion: 6, please see README.md for further details
 *
 * Author: Jacqueline Kalmár
 * Date: February 2024
 */

// jshint esversion: 6

// ******** GLOBAL VARIABLES

// Tracks whether the 'how to play' button has been clicked
let isToggleClicked = false;
// Get a reference to the 'toggleButtonhowto' element in the HTML
const toggleButtonhowto = document.getElementById("toggleButtonhowto");
// Get a reference to the 'howtoplayContainer' element in the HTML
const howtoplayContainer = document.getElementById("howtoplayContainer");
// Get a reference to the 'toggleButtonfeedb' element in the HTML
const feedbackButton = document.getElementById("toggleButtonfeedb");
// Define symbols for the players in the game
// Represents the player
const playerSymbol = "X";
// Represents the computer
const computerSymbol = "O";
// Select all the cell elements from the game board
const cells = document.querySelectorAll(".cell");
// 'X' starts the game
let currentPlayer = "X";
// Tracks if the game is active
let gameActive = true;
// Initial empty game state
const gameState = ["", "", "", "", "", "", "", "", ""];

// Winning Conditions
const winningCombinations = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

//  BUTTON UI

// Wait for the HTML document to be fully loaded and parsed before running this code
document.addEventListener("DOMContentLoaded", function () {
  // Check if the 'howtoplayContainer' and 'toggleButtonhowto' elements exist in the HTML
  if (howtoplayContainer && toggleButtonhowto) {
    // Initially, hide the 'howtoplayContainer' by setting its display style to 'none'
    howtoplayContainer.style.display = "none";

    // Add a click event listener to the 'toggleButtonhowto' element
    toggleButtonhowto.addEventListener("click", function () {
      // Toggle the display of the 'howtoplayContainer' between 'block' and 'none'
      // This allows showing and hiding the instructions on button click
      howtoplayContainer.style.display = howtoplayContainer.style.display === "none" ? "block" : "none";
      isToggleClicked = true;
    });

    // Add a click event listener to the entire document body to detect clicks outside of 'howtoplayContainer'
    document.body.addEventListener("click", function (event) {
      // Check if the click event occurred outside of 'howtoplayContainer' and not on 'toggleButtonhowto'
      if (
        (!howtoplayContainer.contains(event.target) && event.target !== toggleButtonhowto) ||
        // Also, check if the click occurred inside 'howtoplayContainer' but the button hasn't been clicked
        (howtoplayContainer.contains(event.target) && !isToggleClicked)
      ) {
        // If the conditions are met, hide the 'howtoplayContainer'
        howtoplayContainer.style.display = "none";
      }
      // Reset the button click state
      isToggleClicked = false;
    });
  }

  // Check if the 'feedbackButton' element exists in the HTML
  if (feedbackButton) {
    // Add a click event listener to the 'feedbackButton'
    feedbackButton.addEventListener("click", function () {
      // Redirect the user to the 'form.html' page when the feedback button is clicked

      window.location.href = "form.html";
    });
  }
});

// ******** GAME LOGIC

// Event listener for when player clicks on cells
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(event) {
  // Get the index of the clicked cell from its data attribute
  const clickedCellIndex = parseInt(event.target.getAttribute("data-index"));

  // Check if the cell has already been played, or if the game is paused
  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return; // Don't do anything if the cell is not empty or the game is over
  }

  // Update the game state with the player's move
  updateGameState(clickedCellIndex, playerSymbol);
  // Check for a win or a draw after the player's move
  checkForOutcome();

  // Hand over to the computer to make its move
  computerTurn();
}

// Update Game State
function updateGameState(index, symbol) {
  gameState[index] = symbol; // Update the internal game state
  cells[index].innerText = symbol; // Update the UI to show the move
}

// The computer's turn, by choosing first available cell
function computerTurn() {
  // Find the first empty cell
  let moveIndex = -1;
  for (let i = 0; i < gameState.length; i++) {
    if (gameState[i] === "") {
      moveIndex = i;
      break;
    }
  }

  // Check if an empty cell was found
  if (moveIndex !== -1) {
    // If an empty cell exists, the computer marks its symbol in the first available spot
    updateGameState(moveIndex, computerSymbol);
    // After the computer's move, check the game's outcome to see if the move resulted in a win, a draw, or if the game should continue
    checkForOutcome();
  }
}

// Check for a win, draw, or continue the game.
function checkForOutcome() {
  let roundWon = false;
  let winnerSymbol = "";

  // Loop through all possible winning combinations to check if any has been achieved
  for (let i = 0; i < winningCombinations.length; i++) {
    // Current winning condition to check
    const winCondition = winningCombinations[i];
    // Retrieve the game state values for the current winning condition
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];

    // If any of the spots are empty (i.e., not yet played), skip this combination
    if (a === "" || b === "" || c === "") {
      continue;
    }

    // If all spots in the current winning condition are taken by the same symbol, declare a win
    if (a === b && b === c) {
      // Set the win flag
      roundWon = true;
      // Capture the winning symbol
      winnerSymbol = a;
      // Exit the loop as we've found a winner
      break;
    }
  }
  // If a win has been detected, announce the outcome and stop the game
  if (roundWon) {
    // A message depending on the winner
    announceOutcome(winnerSymbol === playerSymbol ? "You Win!" : "Computer Wins!");
    gameActive = false;
    return;
  }

  // Check if the game is a draw
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    announceOutcome("It's a Draw!");
    // Mark the game as inactive
    gameActive = false;
    return;
  }

  // If there's no win or draw, continue the game.
  currentPlayer = currentPlayer === playerSymbol ? computerSymbol : playerSymbol;
}

// Function to announce the outcome of the game
function announceOutcome(message) {
  const outcomeModal = document.getElementById("outcomeModal");
  const outcomeMessage = document.getElementById("outcomeMessage");
  // Set the message inside the modal
  outcomeMessage.innerText = message;
  // Show the modal
  outcomeModal.style.display = "block";

  // Close the modal on click outside of it
  window.onclick = function (event) {
    if (event.target == outcomeModal) {
      outcomeModal.style.display = "none";
    }
  };
}

// Reset function to clear the game
document.addEventListener("DOMContentLoaded", () => {
  // Event listener for the reset game button
  document.getElementById("toggleButtonreset").addEventListener("click", resetGame);
});

function resetGame() {
  // Set the game as active (can be played)
  gameActive = true;
  // Clear the game state by filling it with empty strings
  gameState.fill("");
  // Clear the text content of all cells
  cells.forEach((cell) => (cell.innerText = ""));
}
