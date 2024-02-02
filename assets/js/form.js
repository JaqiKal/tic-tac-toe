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
 * - I have had good use of following sources, code have been amended with the help of:
 *    - Event Handlers: https://www.elated.com/events-and-event-handlers/
 *    - Event Listeners: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
 *    - Modal Dialog: https://www.w3schools.com/w3css/w3css_modal.asp
 *    - form validation: https://blog.bitsrc.io/you-have-been-doing-form-validation-wrong-8b36430d63f6
 *    - Form validation: https://www.w3schools.com/js/js_validation.asp
 *    - For each loop: https://www.w3schools.com/jsref/jsref_foreach.asp
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


// Function to check if a string starts with whitespace
function startsWithWhitespace(string) {
    return /^\s/.test(string);
}
    
// Function to check for form validation
function validateForm() {
  let isValid = true;
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const email = document.getElementById('email');
  const textMsg = document.getElementById('textMsg');


  // Clear previous error messages
document.querySelectorAll('.error-message').forEach((elem) => {
    elem.textContent = ''; // Resetting error messages for each input field
    });

    
  // Function to check if a string starts with whitespace
  function startsWithWhitespace(string) {
    return /^\s/.test(string);
  }

    // Validating the 'fname' field
    if (startsWithWhitespace(fname.value)) {
    document.getElementById('fnameError').textContent = 'First name must not start with whitespace.';
    isValid = false;
    }

    // Validating the 'lname' field
    if (startsWithWhitespace(lname.value)) {
    document.getElementById('lnameError').textContent = 'Last name must not start with whitespace.';
    isValid = false;
    }

  // Validating the 'email' field for leading whitespace and valid format
  // Trim leading whitespace before validation
  email.value = email.value.trimStart(); 
  if (!/\S+@\S+\.\S+/.test(email.value)) {
    document.getElementById('emailError').textContent = 'Email must be a valid email address.';
    isValid = false;
  }


    // Validating the 'textMsg' field
    if (startsWithWhitespace(textMsg.value)) {
    document.getElementById('textmsgError').textContent = 'Feedback must not start with whitespace.';
    isValid = false;
    }

    return isValid; // Return the overall validity of the form
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
    if (isValidSubmission) {
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