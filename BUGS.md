# ta bort senare o lägg i readme

## Noterat

* [Forms shouldn’t be set to time-out](https://www.chhs.colostate.edu/accessibility/best-practices-how-tos/forms/)

## BUGS

### Bug-01

Using const is a common practice in modern JavaScript development because it provides a way to declare constants with block scope, but having stated this, jshint still issued a warning [ 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).], on this code:

![jshint esversion: 6](/documents/doc-images/jshint%20esversion%206.png)

#### Solution-01

To address the warning, I added the following comment at the top of the JavaScript file to indicate that the script are using ES6: ```/* jshint esversion: 6 */``` Checked with [Can I Use](https://caniuse.com/?search=ECMAScript%206%20(ES6)%20) the possible severity of this, as ES6 refers to a huge specification and browsers have various levels of support, "Supported" means at least 95% of the spec is supported. "Partial support" refers to at least 10% of the spec being supported. For full details see the [Kangax ES6 support table](https://compat-table.github.io/compat-table/es6/). The impact is low if any at all.

### Bug-02

When analysing index page with Lighthouse, the performance score was 77, further check showed that it was the Cumulative Layout Shift that was identified. The warning was 'Avoid large layout shifts' indicating that saving could be made when page is loading. The tool addressed
the buttons in the Gameboard grid and the Feedback button as the problem areas.  

#### Solution - 02

These web articles [Cumulative Layout Shift (CLS)](https://web.dev/articles/cls)
[Avoid Large Layout Shifts: 4 Tactics That Actually Work](https://wpshout.com/avoid-large-layout-shifts/#gref) led me to partially solve the problem with lowered performance by setting explicit dimensions for the parts that were indicated. For the buttons in the Gameboard grid', I set fixed width and height in px for selector div cell (.cell) and in selector id feedbackForm (#feedbackForm) I set min-height to 300 px. This resulted in a performance score of 98, the remaining 2 points can potentially be solved by 'minifying CSS and JavaScrip' and by enabling text compression.
