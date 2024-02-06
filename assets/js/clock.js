/**
 * Tic-Tac-Toe o'clock
 * 
 * This script manages the functionality of a digital clock.
 *
 * Features:
 * - Show hour, minutes and seconds in format [ HH:MM:SS]
 * - Updates clock every second
 * 
 * Other:
 * - jshint esversion: 6, please see README.md for further details
 * - Code have been amended with the help of:
 *    - https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
 * 
 * 
 * Author: JaqiKal
 * Date: February 2024
 */

// jshint esversion: 6

document.addEventListener('DOMContentLoaded', function() {

    // Define a function to update the clock
    function updateClock() {
      // Get the current date and time
      var now = new Date();
  
      // Extract hours, minutes, and seconds from the current time
      // 0-23
      var hours = now.getHours(); 
      // 0-59
      var minutes = now.getMinutes(); 
      // 0-59
      var seconds = now.getSeconds(); 
  
      /**
       * To ensure that clock has a consistent HH:MM:SS format, check if 
       * hours, minutes, or seconds are less than 10. If so, add a leading
       *  zero for display.
       */
      if (hours < 10) {
        hours = "0" + hours; 
      }
      if (minutes < 10) {
        minutes = "0" + minutes; 
      }
      if (seconds < 10) {
        seconds = "0" + seconds; 
      }
  
      /**
       * Join hours, minutes, and seconds with colons to form a 
       * time string in HH:MM:SS format
       */
      var timeString = hours + ":" + minutes + ":" + seconds;
  
      /**
       * Use the HTML element with the id 'clock' and set its innerHTML to the time 
       * string to update the displayed time on the web page 
       */
      document.getElementById('clock').innerHTML = timeString;
    }
  
    /**
     * Call the updateClock function every 1000 milliseconds (1 second) to create a 
     * repeating action that updates the clock on the web page in real-time.
     */
    setInterval(updateClock, 1000);
  
    /**
     * Display the current time immediately when the page loads, instead of 
     * waiting for the first interval to elapse.
     */
    updateClock();
  });
  