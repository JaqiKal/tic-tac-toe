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
 * - Listen after feedback form submission and
 *   - display message 
 *   - clear form
 *   - redirect to index
 * 
 * Other:
 * - jshint esversion: 6, please see README.md for further details
 *
 * Author: Jacqueline Kalmár
 * Date: February 2024
 */ 


// jshint esversion: 6 


// GLOBAL VARIABLES 
const toggleButtonhowto = document.getElementById('toggleButtonhowto');
const howtoplayContainer = document.getElementById('howtoplayContainer');
const feedbackButton = document.getElementById('toggleButtonfeedb');

document.addEventListener('DOMContentLoaded', function() {
    let isToggleClicked = false;

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

    if (feedbackButton) {
        feedbackButton.addEventListener('click', function() {
            window.location.href = 'form.html';
        });
    }
});