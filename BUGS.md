## BUGS

### Bug-01

When "div id=gameBoard" was coded as shown below, it resulted in an error message in the terminal, and the accessibility score in Lighthouse was significantly low. The error message was: "Certain ARIA roles must contain particular children: Element has children which are not allowed: button[aria-label]

This issue was linked to the use of ARIA roles and the expected child elements for those roles. Specifically, the role="grid" was used on a div element, and button elements were placed as its children. However, according to ARIA standards, a grid should contain specific child roles like gridcell, row, or columnheader.

```html
<div id="gameBoard" role="grid" aria-label="Tic-Tac-Toe game board">
    <button class="cell" id="cell0" aria-label="Cell 1"></button>
                         :
    <button class="cell" id="cell8" aria-label="Cell 8"></button>
</div> 
```

#### Solution-01

To resolve this, the structure of the gameBoard was reorganized. By reading [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) and [W3C Web Accessibility Initiative (WAI) guidelines on ARIA roles](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#wai-ariaroles,states,andproperties)  and other sources on the net and by trial/error I determined that the buttons needed to be grouped in sets of three and each button should have role="gridcell" added to it. This approach aligned with the ARIA requirements for a grid structure, and fixing the accessibility issues.

#### Comment-01

**Usage of display: contents;:**  I've learned, display: contents; is used to make the container element disappear, which allows its children to participate in the grid layout directly. This is particularly useful in complex layouts where you need to adhere to semantic HTML and ARIA roles for accessibility but also require a specific visual presentation.

### Bug-02

Using const is a common practice in modern JavaScript development because it provides a way to declare constants with block scope, but having stated this, jshint still issued a warning [ 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).], on this code:

![jshint esversion: 6](/documents/doc-images/jshint%20esversion%206.png)

#### Solution-02

To address the warning, I added the following comment at the top of the JavaScript file to indicate that the script are using ES6: ```/* jshint esversion: 6 */``` Checked with [Can I Use](https://caniuse.com/?search=ECMAScript%206%20(ES6)%20) the possible severity of this, as ES6 refers to a huge specification and browsers have various levels of support, "Supported" means at least 95% of the spec is supported. "Partial support" refers to at least 10% of the spec being supported. For full details see the [Kangax ES6 support table](https://compat-table.github.io/compat-table/es6/). The impact is low if any at all.

### Bug-03

When analysing index page with Lighthouse, the performance score was 77, further check showed that it was the Cumulative Layout Shift that was identified. The warning was 'Avoid large layout shifts' indicating that saving could be made when page is loading. The tool addressed
the buttons in the Gameboard grid and the Feedback button as the problem areas.  

#### Solution - 03

These web articles [Cumulative Layout Shift (CLS)](https://web.dev/articles/cls) [Avoid Large Layout Shifts: 4 Tactics That Actually Work](https://wpshout.com/avoid-large-layout-shifts/#gref) led me to partially solve the problem with lowered performance by setting explicit dimensions for the parts that were indicated. For the buttons in the Gameboard grid', I set fixed width and height in px for selector div cell (.cell) and in selector id feedbackForm (#feedbackForm) I set min-height to 300 px. This resulted in a performance score of 98, the remaining 2 points can potentially be solved by 'minifying CSS and JavaScrip' and by enabling text compression.

