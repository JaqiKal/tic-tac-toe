/**
 * Tic-Tac-Toe game
 *
 * This script manages the basic functionality of a Tic-Tac-Toe game in a web application.
 * Player take turns aginst computer marking Xs on a 3x3 grid with the objective of
 * aligning three of their symbols in a row to win. The script handles player
 * interactions, win conditions, and game resets and basic blocking. This game is
 * functional but very basic.
 *
 * I added detailed comments to help myself understand better.
 *
 * Features:
 * - Player turns and symbol tracking (X and O)
 * - Win condition checking for rows, columns, and diagonals
 * - Detection of a draw (cat's game) when the board is full
 * - Resetting the game for a new round
 * - Listen after feedback button submit and redirect to form.index
 * - Basic blocking.
 *
 * Credit:
 *  - Used MDN, w3school, Youtube & JavaScript & jQuery by Jon Ducket
 * to understand loops&iteration:
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 *  - https://www.w3schools.com/js/js_loop_for.asp
 *  - https://www.youtube.com/watch?v=orAS-MBh5f4
 *  - https://javascriptbook.com/
 * to understand the game logic in javascript:
 *  - https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn
 *  - https://www.youtube.com/watch?v=fPew9OI2PnA
 * To set up Modals:
 *  - Modal Dialog: https://www.w3schools.com/w3css/w3css_modal.asp
 *  - Modal box: https://www.w3schools.com/howto/howto_css_modals.asp
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

// ******** BUTTON UI

/**
 * Wait for the HTML document to be fully loaded and parsed before running this code.
 * Check if the 'howtoplayContainer' and 'toggleButtonhowto' elements exist in the HTML.
 * Initially, hide the 'howtoplayContainer' by setting its display style to 'none'.
 * Add a click event listener to the 'toggleButtonhowto' element.
 * Toggle the display of the 'howtoplayContainer' between 'block' and 'none'.
 * This allows showing and hiding the instructions on button click.
 */
document.addEventListener("DOMContentLoaded", function () {
  if (howtoplayContainer && toggleButtonhowto) {
    howtoplayContainer.style.display = "none";
    toggleButtonhowto.addEventListener("click", function () {
      howtoplayContainer.style.display = howtoplayContainer.style.display === "none" ? "block" : "none";
      isToggleClicked = true;
    });

    /**
     * Add a click event listener to the entire document body to detect clicks outside of 'howtoplayContainer'.
     * Check if the click event occurred outside of 'howtoplayContainer' and not on 'toggleButtonhowto'.
     * Also, check if the click occurred inside 'howtoplayContainer' but the button hasn't been clicked.
     * If the conditions are met, hide the 'howtoplayContainer'.
     * Reset the button click state.
     */
    document.body.addEventListener("click", function (event) {
      if ((!howtoplayContainer.contains(event.target) && event.target !== toggleButtonhowto) || (howtoplayContainer.contains(event.target) && !isToggleClicked)) {
        howtoplayContainer.style.display = "none";
      }
      isToggleClicked = false;
    });
  }

  /** Check if the 'feedbackButton' element exists in the HTML.
   * Add a click event listener to the 'feedbackButton'.
   * Redirect the user to the 'form.html' page when the feedback button is clicked.
   */
  if (feedbackButton) {
    feedbackButton.addEventListener("click", function () {
      window.location.href = "form.html";
    });
  }
});

// ******** GAME LOGIC

// Event listener for when player clicks on cells
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

/**
 * Get the index of the clicked cell from its data attribute.
 * Check if the cell has already been played, or if the game is paused.
 * Don't do anything if the cell is not empty or the game is over.
 * Update the game state with the player's move.
 * Check for a win or a draw after the player's move.
 * Hand over to the computer to make its move.
 */
function handleCellClick(event) {
  const clickedCellIndex = parseInt(event.target.getAttribute("data-index"));

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  updateGameState(clickedCellIndex, playerSymbol);
  checkForOutcome();
  computerTurn();
}

// Update Game State. Update the internal game state. Update the UI to show the move.
function updateGameState(index, symbol) {
  gameState[index] = symbol;
  cells[index].innerText = symbol;
  // Disable the button after it's marked
  cells[index].disabled = true;
}

/**
 * Function to find a blocking move, first check if the current player
 * can win in a row, column or diagonally, and if not, find the best
 * move to block the opponent from winning.
 */
function findBlockingMove() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const winCondition = winningCombinations[i];
    const a = gameState[winCondition[0]];
    const b = gameState[winCondition[1]];
    const c = gameState[winCondition[2]];

    if ((a === b && a === playerSymbol && c === "") || (a === c && a === playerSymbol && b === "") || (b === c && b === playerSymbol && a === "")) {
      if (a === "") return winCondition[0];
      if (b === "") return winCondition[1];
      if (c === "") return winCondition[2];
    }
  }
  return -1; // No blocking move found
}

/**
 * Computer's turn, basic blocking (defensive gameplay).
 * First, it attempts to find a blocking move to prevent the player from winning.
 * If no such move is found, it defaults to choosing the first available empty cell.
 */
function computerTurn() {
  // Attempt to find a blocking move to prevent the player from winning.
  let moveIndex = findBlockingMove();

  // If no blocking move, find the first empty cell
  if (moveIndex === -1) {
    for (let i = 0; i < gameState.length; i++) {
      if (gameState[i] === "") {
        moveIndex = i;
        break;
      }
    }
  }

  /**
   * If a valid move is identified, execute it and check the game's outcome.
   * Mark the chosen cell with the computer's symbol.
   * Evaluate the game state for a win, draw, or continuation.
   */
  if (moveIndex !== -1) {
    updateGameState(moveIndex, computerSymbol);
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

    /**
     * If all spots in the current winning condition are taken by the same symbol, declare a win.
     *  Set the win flag.
     *  Capture the winning symbol.
     *  Exit the loop as there is a winner.
     */
    if (a === b && b === c) {
      roundWon = true;
      winnerSymbol = a;
      break;
    }
  }

  // If a win has been detected, announce the outcome and stop the game. A message depending on the winner.
  if (roundWon) {
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

  // Close the modal on click
  outcomeModal.addEventListener("click", function () {
    outcomeModal.style.display = "none";
  });
}

// Reset function to clear the game
document.addEventListener("DOMContentLoaded", () => {
  // Event listener for the reset game button
  document.getElementById("toggleButtonreset").addEventListener("click", resetGame);
});

/*
/**
 * Set the game as active (can be played).
 * Clear the game state by filling it with empty strings.
 * Clear the text content of all cells.
 *
*/

// Set the game as active. Reset the game state to empty
function resetGame() {
  gameActive = true;
  gameState.fill("");

  // Reset the text and re-enable each cell for interaction
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.disabled = false; // Re-enable the cell if it was disabled
  });

  // Close the outcome modal if it's open
  const outcomeModal = document.getElementById("outcomeModal");
  if (outcomeModal.style.display === "block") {
    outcomeModal.style.display = "none";
  }
}
