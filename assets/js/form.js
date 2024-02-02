/**
 * Tic-Tac-Toe game
 * 
 * This script manages the functionality of a feedback form that is part of a website with a web application.
 *
 * Features:
 * - Fill in form
 * - Upon not filling in correctly receive error message
 * - Click on submit button
 * - Listen after feedback after submitting form and
 *   - clear form
 *   - display thank you message
 *   - redirect to index automatically 
 *   - redirect to index by clicking anywhere on page
 * 
 * Other:
 * - jshint esversion: 6, please see README.md for further details
 *
 * Author: JaqiKal
 * Date: February 2024
 */

// jshint esversion: 6

// Declare and initialize global variables here
const feedbackbtnSubmit = document.getElementById('feedbackbtnSubmit');
const feedbackForm = document.getElementById('feedbackForm');
const modal = document.getElementById('feedbackModal');
const message = document.getElementById('modalMessage');
const modalContent = document.querySelector('.modal-content');

// Function to check for form validation
function validateForm() {
  let isValid = true;
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const email = document.getElementById('email');
  const textMsg = document.getElementById('textMsg');

  // Clear previous error messages
  document.querySelectorAll('.error-message').forEach((elem) => {
    elem.textContent = '';
  });

  // Checking if first name is filled
  if (!fname.value.trim()) {
    document.getElementById('fnameError').textContent = 'First name is required.';
    isValid = false;
  }

  // Checking if last name is filled
  if (!lname.value.trim()) {
    document.getElementById('lnameError').textContent = 'Last name is required.';
    isValid = false;
  }

  // Checking if email is filled and valid
  if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
    document.getElementById('emailError').textContent = 'A valid email address is required.';
    isValid = false;
  }

  // Checking if feedback message is filled
  if (!textMsg.value.trim()) {
    document.getElementById('textMsgError').textContent = 'Feedback is required.';
    isValid = false;
  }

  return isValid;
}

// DOM loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if the feedbackbtnSubmit exists to avoid null reference errors
  if (feedbackbtnSubmit) {
    // Add click event listener to the feedback button
    feedbackbtnSubmit.addEventListener('click', function() {
      // Logic to be executed when feedback button is clicked (if any)
    });
  }


  // Modal functionality for submitting the form in the form.html 
  feedbackForm.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Validate form before processing
    if (validateForm()) {
      // Clear the form fields only if validation passes
      feedbackForm.reset();

      // Set the message and show the modal
      message.textContent = 'Thank you for trying out my feedback form! Currently, this function is not active as it is for demonstration purposes. In 30 seconds, you will be redirected back to the game. Alternatively, you can click anywhere on the page, or press "Enter" to return to the action.';
      modal.style.display = "block";

      /**
       * Logic for handling modal interactions only after successful validation.
       * Set up modal interactions after displaying it, 
       * ensuring users can close the modal and be redirected as intended.
       */
      handleModalInteractions(true);
    }
  });

  function handleModalInteractions(isValidSubmission) {
    if(isValidSubmission) {
             // Option, a timeout to close the modal after n seconds and redirect, but only after a valid form submission
              setTimeout(closeModalAndRedirect, 30000); // 30 seconds
    }

    // Add an event listener to the modal message element for click and keydown events.
    // These event listeners are responsible for closing the modal and redirecting immediately if the user interacts
    message.addEventListener('click', closeModalAndRedirect); 
    document.addEventListener('keydown', function(event) {
        // Check if the modal is displayed and the Enter key is pressed
        if (event.key === "Enter" && modal.style.display === "block") {
                closeModalAndRedirect();
        }
    });
    
    // When the user clicks anywhere outside the modal content, close it
    window.onclick = function(event) {
        if (event.target === modal || event.target === modalContent) {
            closeModalAndRedirect();
        }
    };
}

// Helper function to close the modal and redirect the user
function closeModalAndRedirect() {
modal.style.display = "none";
window.location.href = 'index.html';
}

});
