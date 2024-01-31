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
            
            // Redirect to 'index.html' after waiting n seconds. Window setTimeout() from w3schools
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 3000); // 3 seconds delay
        });
    }

    // Modal functionality in FORM html 
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
    
        var modal = document.getElementById('feedbackModal');
        var span = document.getElementsByClassName("close-button")[0];
        var message = document.getElementById('modalMessage');
    
        // Set the message and show the modal. Rules Modal from w3schools
        message.textContent = 'Thank you for your feedback!';
        modal.style.display = "block";
    
        // When the user clicks on <span> (x), close the modal. Rules Modal from w3schools
        span.onclick = function() {
            modal.style.display = "none";
        };
    
        // When the user clicks anywhere outside of the modal, close it. Rules Modal from w3schools
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    
        // You can also add a timeout to hide the modal after a few seconds. Window setTimeout()
        setTimeout(function(){
            modal.style.display = "none";
        },  1200); // 1.2 seconds
    });
    






});
