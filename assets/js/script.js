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
 * Date: 2024 Feb 15
 */ 

/* jshint esversion: 6 */

// GLOBAL VARIABLES
const toggleButtonhowto = document.getElementById('toggleButtonhowto');
const howtoplayContainer = document.getElementById('howtoplayContainer');
const feedbackForm = document.getElementById('feedbackForm');
const messageElement = document.getElementById('message');

// MAIN CODE with EVENT LISTENERS embedded within
document.addEventListener('DOMContentLoaded', function() {
    let isToggleClicked = false;

    // Code for displaying the instrutions when 'How to Play' button is clicked in INDEX page, 
    // and allowing users to close containre by clicking either inside or outside of it.
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

    // Feedback submission handling in FORM page
    if (feedbackForm && messageElement) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Display the thank you message
            messageElement.textContent = 'Thank you for your feedback!';
        });
    }

    // Modal functionality in FORM html 
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
    
        var modal = document.getElementById('feedbackModal');
        var span = document.getElementsByClassName("close-button")[0];
        var message = document.getElementById('modalMessage');

        // Clear the form fields
        feedbackForm.reset();
    
        // Set the message and show the modal. Modal from w3schools
        message.textContent = 'Thank you for your feedback!';
        modal.style.display = "block";
    
        // When the user clicks on <span> (x), close the modal. Modal from w3schools
        span.onclick = function() {
            modal.style.display = "none";
        };
    
        // When the user clicks anywhere outside of the modal, close it. Modal from w3schools
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    
        // Timeout to hide modal after a n seconds and redirect to 'index.html'. Window setTimeout() from w3schools
        setTimeout(function(){
            modal.style.display = "none";
            window.location.href = 'index.html';
        },  1200); // 1.2 seconds
        
    });
});
