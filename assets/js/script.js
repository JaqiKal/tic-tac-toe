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
 * - jshint esversion: 6, please see README.md for further details
 */ 


// EXTERNAL IMPORTS
// No external imports are used in this script

// CONSTANTS
// No explicit constants are defined in this script

// GLOBAL VARIABLES
const toggleButtonhowto = document.getElementById('toggleButtonhowto');
const howtoplayContainer = document.getElementById('howtoplayContainer');
const feedbackForm = document.getElementById('feedbackForm');
const messageElement = document.getElementById('message');

// UTILITY OR HELPER FUNCTIONS
// No explicit utility or helper functions are defined in this script

// MAIN CODE with EVENT LISTENERS embedded within
document.addEventListener('DOMContentLoaded', function() {
    let isToggleClicked = false;

    // Code for displaying the rules when 'How to Play' button is clicked, and
    // allowing users to close these rules by clicking either inside or outside the container.
    if (howtoplayContainer && toggleButtonhowto) {
        howtoplayContainer.style.display = 'none';

        toggleButtonhowto.addEventListener('click', function() {
            howtoplayContainer.style.display = howtoplayContainer.style.display === 'none' ? 'block' : 'none';
            isToggleClicked = true;
        });

        document.body.addEventListener('click', function(event) {
            if (!howtoplayContainer.contains(event.target) && event.target !== toggleButtonhowto ||
                (howtoplayContainer.contains(event.target) && !isToggleClicked)) {
                howtoplayContainer.style.display = 'none';
            }
            isToggleClicked = false;
        });
    }

    // Feedback form submission handling
    if (feedbackForm && messageElement) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Display the thank you message
            messageElement.textContent = 'Thank you for your feedback!';
            
            // Clear the form fields
            feedbackForm.reset();
            
            // Redirect to 'index.html' after waiting n seconds
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 3000); // 3 seconds delay
        });
    }
});
