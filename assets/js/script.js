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

// jshint esversion: 6 

// GLOBAL VARIABLES 
const toggleButtonhowto = document.getElementById('toggleButtonhowto');
const howtoplayContainer = document.getElementById('howtoplayContainer');
const feedbackForm = document.getElementById('feedbackForm');
const messageElement = document.getElementById('message');
// Fetch the Feedback button using its ID
const feedbackButton = document.getElementById('toggleButtonfeedb');


// Main code with EVENT LISTENERS embedded within
document.addEventListener('DOMContentLoaded', function() {
    let isToggleClicked = false;

    /* Code for displaying the instructions when 'How to Play' button is clicked in INDEX page, 
       and allowing users to close container by clicking either inside or outside of it. */
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

    // Check if the feedbackButton exists to avoid null reference errors
    if (feedbackButton) {
        // Add click event listener to the feedback button
        feedbackButton.addEventListener('click', function() {
            // Redirect the user to the form.htm page
            window.location.href = 'form.html';
    });
}

        // Modal functionality for submitting the form in the form.html 
        document.getElementById('feedbackForm').addEventListener('submit', function(event) {
            // Prevent form submission
            event.preventDefault();
            
            // Declare and initialize variables here
            var modal = document.getElementById('feedbackModal');
            var span = document.getElementsByClassName("close-button")[0];
            var message = document.getElementById('modalMessage');
            var modalContent = document.querySelector('.modal-content');
            
            // Clear the form fields
            feedbackForm.reset();
        
            // Set the message and show the modal
            message.textContent = 'Thank you for trying out my feedback form! Currently, this function is not active as it is for demonstration purposes. In 15 seconds, you will be redirected back to the game. Alternatively, you can click anywhere on the page to return to the action.';
            modal.style.display = "block";

            // When the user clicks on <span> (x), close the modal. Modal from w3schools
            span.onclick = function() {
            modal.style.display = "none";
            };
        

            // Add an event listener to the modal message element
            message.addEventListener('click', function() {
                 modal.style.display = "none";
                // Redirect to 'index.html' when the user clicks on the modal message
                window.location.href = 'index.html';
            });

          
           // When the user clicks anywhere outside the modal content, close it. Modal from w3schools
            window.onclick = function(event) {
                if (event.target === modal || event.target === modalContent) {
                    modal.style.display = "none";
                    // Redirect to 'index.html' when the user clicks outside or inside the modal
                    window.location.href = 'index.html';
                }
            };

            // Timeout to hide modal after n seconds and redirect. Window setTimeout() from w3schools
            setTimeout(function(){
                modal.style.display = "none";
                window.location.href = 'index.html';
            }, 15000); // 15 seconds
            
        });

});

