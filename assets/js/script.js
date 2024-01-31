/**
 * Tic-Tac-Toe game
 * 
 * This script manages the functionality of a Tic-Tac-Toe game in a web application.
 * Players can take turns marking Xs and Os on a 3x3 grid with the objective of
 * aligning three of their symbols in a row to win. The script handles player
 * interactions, win conditions, and game resets.
 *
 * Features:
 * - Player turns and symbol tracking (X and O)
 * - Win condition checking for rows, columns, and diagonals
 * - Detection of a draw (cat's game) when the board is full
 * - Resetting the game for a new round
 *
 * Author: Jacqueline Kalmár
 * Date: 2024 Feb 15
 *
 */ 



// EXTERNAL IMPORTS
// No external imports are used in script

// CONSTANTS
// No explicit constants is defined in script


// GLOBAL VARIABLES
const toggleButtonhowto = document.getElementById('toggleButtonhowto');
const howtoplayContainer = document.getElementById('howtoplayContainer');
const feedbackForm = document.getElementById('feedbackForm');
const messageElement = document.getElementById('message');


// UTILITY or HELPER FUNCTIONS
// No explicit utility functions is defined in script


// MAIN CODE with EVENT LISTENERS embedded within
// To display the rules when its button is clicked, and allow users to close these rules by clicking either inside or outside the container.
document.addEventListener('DOMContentLoaded', function() {
    // Initialize howtoplayContainer as hidden
    howtoplayContainer.style.display = 'none';

    // Toggle Hide/Show for 'howtoplayContainer'
    toggleButtonhowto.addEventListener('click', function() {
        howtoplayContainer.style.display = howtoplayContainer.style.display === 'none' ? 'block' : 'none';
    });

    // Event listener for clicks on the body
    document.body.addEventListener('click', function(event) {
        // Check if the click is outside 'howtoplayContainer' and not on the 'toggleButtonhowto'
        if (!howtoplayContainer.contains(event.target) && event.target !== toggleButtonhowto) {
            // Hide 'howtoplayContainer'
            howtoplayContainer.style.display = 'none';
        }
    });
});