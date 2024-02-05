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
 * - Listen after feedback form submission and
 *   - display message 
 *   - clear form
 *   - redirect to index
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


// GLOBAL VARIABLES 
// Tracks whether the 'how to play' button has been clicked
let isToggleClicked = false;
// Get a reference to the 'toggleButtonhowto' element in the HTML
const toggleButtonhowto = document.getElementById('toggleButtonhowto');
// Get a reference to the 'howtoplayContainer' element in the HTML
const howtoplayContainer = document.getElementById('howtoplayContainer');
// Get a reference to the 'toggleButtonfeedb' element in the HTML
const feedbackButton = document.getElementById('toggleButtonfeedb');
// Define symbols for the players in the game
// Represents the player
const playerSymbol = 'X'; 
// Represents the computer
const computerSymbol = 'O';
// Select all the cell elements from the game board
const cells = document.querySelectorAll('.cell');
// 'X' starts the game
let currentPlayer = 'X';
// Tracks if the game is active
let gameActive = true;
// Initial empty game state
const gameState = ['', '', '', '', '', '', '', '', '']; 

// Winning Conditions
const winningCombinations = [
    // Rows
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    //Columns
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    // Diagonals  
    [0, 4, 8], [2, 4, 6]             
];

 //  BUTTON UI
 // Wait for the HTML document to be fully loaded and parsed before running this code
 document.addEventListener('DOMContentLoaded', function() {

     // Check if the 'howtoplayContainer' and 'toggleButtonhowto' elements exist in the HTML
    if (howtoplayContainer && toggleButtonhowto) {
         // Initially, hide the 'howtoplayContainer' by setting its display style to 'none'
        howtoplayContainer.style.display = 'none';

         // Add a click event listener to the 'toggleButtonhowto' element
        toggleButtonhowto.addEventListener('click', function() {
             // Toggle the display of the 'howtoplayContainer' between 'block' and 'none'
             // This allows showing and hiding the instructions on button click
            howtoplayContainer.style.display = howtoplayContainer.style.display === 'none' ? 'block' : 'none';
            isToggleClicked = true;
        });

         // Add a click event listener to the entire document body to detect clicks outside of 'howtoplayContainer'
        document.body.addEventListener('click', function(event) {
             // Check if the click event occurred outside of 'howtoplayContainer' and not on 'toggleButtonhowto'
            if (!howtoplayContainer.contains(event.target) && event.target !== toggleButtonhowto ||
                 // Also, check if the click occurred inside 'howtoplayContainer' but the button hasn't been clicked
                (howtoplayContainer.contains(event.target) && !isToggleClicked)) {
                 // If the conditions are met, hide the 'howtoplayContainer'
                howtoplayContainer.style.display = 'none';
            }
            // Reset the button click state
            isToggleClicked = false;
        });
    }

    // Check if the 'feedbackButton' element exists in the HTML
    if (feedbackButton) {
        // Add a click event listener to the 'feedbackButton'
        feedbackButton.addEventListener('click', function() {
             // Redirect the user to the 'form.html' page when the feedback button is clicked

            window.location.href = 'form.html';
        });
    }
});


// GAME LOGIC 

// Event listener for player clicks on cells
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    // Get the index of the clicked cell from its data attribute
    const clickedCellIndex = parseInt(event.target.getAttribute('data-index'));

    // Check if the cell has already been played, or if the game is paused
    if (gameState[clickedCellIndex] !== '' || !gameActive) {
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
        if (gameState[i] === '') {
            moveIndex = i;
            break;
        }
    }

    if (moveIndex !== -1) {
        updateGameState(moveIndex, computerSymbol);
        checkForOutcome();
    }
}


// Check for win and draw

 // Reset function to clear the game

