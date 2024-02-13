# # Tic Tac Toe - A game for all times

![The website shown on a variety of screen sizes](/documentation/doc-image/amiresponsive.png)

Visit the deployed site: [Tic-Tac-To ToGo](https://jaqikal.github.io/tic-tac-toe/)

- - -

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [Lighthouse](#lighthouse)
* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)

Testing was ongoing throughout the entire build. I utilised Chrome developer tools whilst building to pinpoint and troubleshoot any issues as I went along.
During development I made use of google developer tools to ensure everything was working correctly and to assist with troubleshooting when things were not working as expected.
I have used google chrome developer tools & Firefox inspector tool to ensure that each page is responsive on a variety of different screen sizes and devices.

### Testing was performed on the following devices

* Desktop:
 *Lenovo Legion T7
* Screen:
  *Samsung Odyssey G3 / 27" / 1920 x 1080 /
* Mobile Devices:
  *Samsung Galaxy S20

### Browser compability

Each device tested the site using the following browsers:

* Google Chrome, version 121.0.6167.86 (Official Build) (64-bit)

* Firefox, version 122.0 (64-bit)

### Responsiveness

* Tested on Galaxy S20, 27" Samsung screen
* [Responsinator](http://www.responsinator.com/?url=https%3A%2F%2Fjaqikal.github.io%2Fwellness-therapy%2F)
* [Am I Responsive](https://ui.dev/amiresponsive?url=https://jaqikal.github.io/wellness-therapy/)

- - -

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. It was also used to validate the CSS.

* [404.htm](/documentation/doc-image/w3-404.png) - Passed
* [form.html](/documentation/doc-image/w3-contact.png) - Passed
* [index.html](/documentation/doc-image/w3-css.png) - Passed

- - -

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.
This was done only on Desktop

All but one score-meter is in the green, achieving a scores from 99  till 100. Main issues are related to lesser performance due to bad image handling.

#### Lighthouse Index html

![x](/documentation/doc-images/lighthouse-index.webp)

* [Report on Index](/documentation/lighthouse-index.pdf)

#### Lighthouse Form html

![x](/documentation/doc-images/lighthouse-form.webp)

* [Report on Form](/documentation/lighthouse-form.pdf)

#### Lighthouse 404 Not found page

![x](/documentation/doc-images/lighthouse-404.webp)

* [Report on 404](/documentation/lighthouse-404.pdf)

### JSHint

#### Desktop

![404.htm](/documentation/doc-image/lighthouse-)
![contact.html](/documentation/doc-image/lighthouse-)
![cookies.html](/documentation/doc-image/lighthouse-)

#### Mobile

![404.htm](/documentation/doc-image/lighthouse-)
![contact.html](/documentation/doc-image/lighthouse-)
![cookies.html](/documentation/doc-image/lighthouse-)

## MANUAL TESTING

### Testing User Stories

`First Time Visitors`

|Goals|How are they achieved?|
| :--- | :--- |
|I want to easily find and understand the instructions for playing Tic-Tac-Toe against the computer, so I can start playing immediately without prior knowledge of the game.| This is directly addressed through a user-friendly UI element. The "Hide/Show How to Play" button is a clear and intuitive solution that allows users to access the instructions as needed. This approach ensures that even users with no prior knowledge of the game can quickly learn how to play, enhancing the user experience from the outset. |

`Returning Visitors`

|  Goals | How are they achieved? |
| :--- | :--- |
| I wish to see any new features or updates added to the game since my last visit, such as improved AI difficulty levels or additional customization options, to keep the gameplay exciting and challenging. | New features will immediately be visible on the landing page. Users can send their feed-back via the feed-back form. In future versions of this game a 'What's New' section/page will be introduced. |

`Frequent Visitors`

| Goals | How are they achieved? |
| :--- | :--- |
| I am interested in providing feedback on my gaming experience through a simple and accessible form, hoping to see my suggestions or reported issues addressed in future updates to improve the game for myself and others.| In current version of the site the visitor can leave their feedback via a dedicated form. In future versions of this site the feed-back will be collected and acted upon, introducing a 'Whats's brewing' page where one can see coming features. |

- - -

### Full Testing

#### Landing Page (LAP)

| TestCase ID | Feature | Expected Outcome | Testing Performed | Result Chrome| Result FireFox | Comment |
| ---| --- | --- | --- | --- |--- |--- |
| LAP-01 | Navigation to Game | Clicking "Game" reloads the landing page |Click "Game" link | PASS | PASS | |
| LAP-02 | Navigation to Feedback Form |Clicking "Feedback" redirects to the feedback form | Click "Feedback" link | PASS | PASS | |
| LAP-03 | Display of How To Play | "Hide/Show How To Play" toggles the visibility of game instructions | Click "Hide/Show How To Play" button | PASS | PASS | |
| LAP-04 | Game Interaction | Clicking on an empty cell marks it with "X" or "O" | Click on game board cells |PASS | PASS | |
| LAP-05 | Interaction with Occupied Cells | Clicking on a cell already marked with a player symbol does not alter the cell's state or symbol. | Attempt to click on cells already marked with 'X' or 'O'. | PASS | PASS | |
| LAP-05 | Interaction with Occupied Cells | Clicking on a cell already marked with a player symbol does not alter the cell's state or symbol. | Attempt to click on cells already marked with 'X' or 'O'. | PASS | PASS | |
| LAP-06 | Game Reset |Clicking "Reset Game" clears the game board | Click "Reset Game" button | PASS| PASS | |
| LAP-07 | Dynamic Game Board Interaction | Each cell on the game board can only be clicked once per game | Attempt to click an already marked cell | PASS |PASS | |
| LAP-08 | Win Condition Detection | The game correctly identifies a win condition | Align three symbols in a row/column/diagonal | PASS | PASS | |
| LAP-09 | Draw Condition Detection | The game correctly identifies a draw condition | Fill all cells without a winning alignment | PASS | PASS | |
| LAP-10 | Modal Outcome Display | Modal displays the correct outcome message at game end | Complete a game | PASS |PASS | |
| LAP-11 | Modal Close Functionality | Modal closes upon clicking inside its area | Click on modal | PASS | PASS | |

#### Form Page (FOP)

| TestCase ID | Feature | Expected Outcome | Testing Performed | Result Chrome| Result FireFox | Comment |
| ---| --- | --- | --- | --- |--- |--- |
| FOP-01 | Form Input Validation | Submitting an empty or invalid form shows error messages | Submit form without filling| PASS | PASS | |
| FOP-02 | Field-specific Validation | Each field displays a specific error message for invalid input | Enter invalid data in each field separately | PASS | PASS | |
| FOP-03 | Real-time Validation Feedback | Users can navigate through form fields using the keyboard | Fill each field and observe instant feedback | PASS | PASS | |
| FOP-04 | Keyboard Navigation | Submitting an empty or invalid form shows error messages | Tab through fields and submit with Enter | PASS | PASS | |
| FOP-05 | Successful Form Submission | Valid form submission shows a thank you message and redirects | Fill form and submit | PASS | PASS | |
| FOP-06 | Navigation to Game | Clicking "Game" reloads the landing page | Click "Game" link | PASS |  PASS | |
| FOP-07 | Feedback Button Functionality | "Submit feedback" button submits the form | Click "Submit feed-back" button | PASS| PASS | |
| FOP-08 | text input placeholder | All placeholder text have font-family 'Open-Sans' | Occular check | PASS| PASS | See "Failed  test cases  - now FIXED" |

#### 404 not found Page (NFP)

| TestCase ID | Feature | Expected Outcome | Testing Performed | Result Chrome| Result FireFox | Comment |
| ---| --- | --- | --- | --- |--- |--- |
| NFP-01 | Navigation to Game | Clicking "Back to the Game" redirects to the landing page | Click "Back to the Game" link| PASS  | PASS | |
| NFP-02 | Feedback Link | Clicking "Let us know what went wrong!" redirects to the feedback form | Click feedback link | PASS  | PASS | |
| NFP-03 | 404 Message Display | 404 page displays the custom error message correctly | Navigate to a non-existent URL| PASS | PASS | |

#### Accessibility and Usability (AUS)

| TestCase ID | Feature | Expected Outcome | Testing Performed | Result Chrome| Result FireFox | Comment |
| ---| --- | --- | --- | --- |--- | --- |
| AUS-01 | Keyboard Accessibility | All interactive elements are accessible via keyboard | Navigate and interact using keyboard only | Partial PASS  | Partial PASS | See "Failed  test cases  - now FIXED" |
| AUS-02 | Screen Reader Compatibility | Screen readers correctly announce elements and actions | Use a screen reader to navigate the site | PASS  | PASS | |
| AUS-03 | Contrast Ratio Compliance | Text and background contrasts meet accessibility guidelines | Check contrast ratios with a tool | PASS  | PASS | |
| AUS-04 | Responsive Font Sizes | Font sizes adjust appropriately for different screen sizes| Change browser zoom and screen resolutions | PASS  | PASS | |

#### General Test Cases (GEN)

| TestCase ID | Feature | Expected Outcome | Testing Performed | Result Chrome| Result FireFox | Comment |
| ---| --- | --- | --- | --- |--- |---|
| GEN-01 | Clock Functionality | The digital clock displays the current time and updates every second | Observe the clock link| PASS  | PASS | |
| GEN-02 | Responsive Design | The website layout adjusts correctly for mobile and desktop views | Resize browser window | PASS  | PASS | |
| GEN-03 | Cross-Browser Compatibility | All features work identically in both Chrome and Firefox | Perform all tests in both browsers | PASS | PASS | |
| GEN-04 | Page Load Time| Pages load within acceptable time frames | Measure load times using browser dev tools | PASS | PASS | |
| GEN-05 | HTTPS Redirect| Site redirects HTTP access to HTTPS | Access site with HTTP and observe redirect | PASS | PASS | |

### Failed  test cases  - now FIXED

| TestCase ID| Feature | Expected Outcome | Result | Result after correction|  Comment |
| ---| --- | --- | --- | --- |---|
| AUS-01 | Keyboard Accessibility | All interactive elements are accessible via keyboard | Not possible to navigate with keyboard and cells not accessible | PASS | PASS | See Bug-03 |
| FOP-08 | text input placeholder | All placeholder text have font-family 'Open-Sans' | Two different font families not selected by me| PASS| See Bug-04 |

## BUGS

### Bug-01

Using const is a common practice in modern JavaScript development because it provides a way to declare constants with block scope, but having stated this, jshint still issued a warning [ 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).], on this code:

![jshint esversion: 6](/documentation/doc-images/jshint-esversion-6.png)

#### Solution-Bug-01

To address the warning, I added the following comment at the top of the JavaScript file to indicate that the script are using ES6: ```/* jshint esversion: 6 */``` Checked with [Can I Use](https://caniuse.com/?search=ECMAScript%206%20(ES6)%20) the possible severity of this, as ES6 refers to a huge specification and browsers have various levels of support, "Supported" means at least 95% of the spec is supported. "Partial support" refers to at least 10% of the spec being supported. For full details see the [Kangax ES6 support table](https://compat-table.github.io/compat-table/es6/). The impact is low if any at all.

### Bug-02

When analysing index page with Lighthouse, the performance score have been wavering between 77 and 93, further check showed that it was the Cumulative Layout Shift that was identified. The warning was 'Avoid large layout shifts' indicating that saving could be made when page is loading. The tool addressed
the buttons in the Gameboard grid and the Feedback button as the problem areas.  

#### Solution-Bug-02

These web articles [Cumulative Layout Shift (CLS)](https://web.dev/articles/cls)
[Avoid Large Layout Shifts: 4 Tactics That Actually Work](https://wpshout.com/avoid-large-layout-shifts/#gref) led me to solve the problem partially with lowered performance by setting explicit dimensions for the parts that were indicated. For the buttons in the Gameboard grid', I set fixed width and height in px for selector div cell (.cell) and in selector id feedbackForm (#feedbackForm) I set min-height to 300 px. This resulted in a performance score of 98, the remaining 2 points can potentially be solved by 'minifying CSS and JavaScrip' and by enabling text compression.
During coding, CLS has haunted me, I decided to leave the button style grid and make an ordinary div grid instead, and to use more narrow border lines on buttons, and to add a smoother transition effect to buttons and cells by using
```` transition: background-color 0.3s ease, transform 0.2s ease, border 0.2s ease;``` and finally I got rid of the performace issue.

### Bug-03

The game board and its cells were not keyboard-navigable, making them inaccessible.

#### Solution-Bug-03

* Changed the game board cell from ```<div class="cell" data-index="0"></div>```  to ```<button class="cell" data-index="0" tabindex="0" aria-label="Cell 1"></button>```
* Added ```aria-labelledby="gameBoard_title"``` in the div.game-board. This attribute refers to the id of the heading, improving the relationship between the heading and the board for screen reader users.
* Changed 'div' elements for cells to 'button' elements. This automatically makes them focusable and interactive with the keyboard, removing the need for tabindex and simplifying event handling since buttons are inherently designed for user interaction.
* Added aria-label to each button to provide a textual representation of each cell's position, enhancing the screen reader experience by making it clear what each button (cell) represents.

### Bug-04

After feed-back from my friends testing the game, I decided to change LAP-11 from closing modal by clicking outside of it till on(inside) it. TThis adjustment either introduced a new issue or unveiled an existing one where the game board cells were not correctly re-enabled for interaction. Consequently, after completing a game and clicking the reset button, the board did not clear as expected.

#### Solution-Bug-04

 I added an updated version of the resetGame function that ensures cells are re-enabled for interaction, and the game is definitively set to an active state, allowing for new moves immediately after a reset without needing a page refresh.

### Bug-05

The placeholder text within the form displayed two distinct font styles, Arial and Monospace, which were not selected by me.

#### Solution-Bug-05

I declared ```font-family: inherit;```  for  div class text-input and div id textMsg.

### UNSOLVED Bugs

|ID|Feature|Expected Outcome|Result|
|---|---|---|---|
|---|---|---|---|

### KNOWN ISSUES

* Warning in CSS

> Imported style sheets are not checked in direct input and file upload modes

 Since the tool used does not check imported stylesheets, it will not validate or ensure the correctness of the styles coming from the Google Fonts link. This means any issues with these styles (like incorrect font weights or families) would not be detected.

- - -
