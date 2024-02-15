# Tic Tac Toe - A game for all times

![The website shown on a variety of screen sizes](/documentation/doc-images/amiresponsive.webp)

Visit the deployed site: [Tic-Tac-Toe](https://jaqikal.github.io/tic-tac-toe/index.html)

Tic-Tac-Toe, also known as Noughts and Crosses, is a two-player game where the objective is to align three of your symbols (X or O) in a row, column, or diagonal to win the game. This web application manages one player and computer interaction, tracks the game state, and checks for win conditions or a draw.  It has a basic game logic. The aim was to make it functional, accessible and set a foundation for future enhancements.

Get set for Toe-to-Toe Tic-Tac-Toe! No need to gather pals—just choose your symbol and jump into the tic-tac-tussle. Are you ready for the challenge? Let's see who conquers the grid!

This is my second project, it has been built using HTML5, CSS3 & JavaScript for educational purposes as part of Code Institute’s Diploma in Web Application Development Course.

- - -

## CONTENTS

* [User Experience](#user-experience-ux)
  * [Concept to User-Friendly Design](#concept-to-user-friendly-design)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Design and Colour Scheme](#design-and-colour-scheme)
  * [Index page](#index-page)
  * [Form page](#form-page)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Structure & Features](#structure--features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing & Defects](#testing--bugs)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

- - -

## User Experience (UX)

### Concept to User-Friendly Design

My primary aim was to develop a compelling Tic-Tac-Toe game that offers a twist on the classic game by introducing a player versus computer mode. This is a basic implementation where the computer makes random moves, the initial focus will be on creating a functional game where new features can be added over time. Recognizing the importance of accessibility and user engagement, I crafted a responsive design through wireframe planning. This ensured that whether on a smartphone or desktop, players would enjoy a seamless experience. Wireframes also acted as a visual guide during the development process, helping to organize the placement of game elements. The foundational structure of the game was built upon existing tutorials and guides, with due acknowledgment given to the original creators. The game was set to feature a minimalist aesthetic with a modern twist, leveraging vibrant colors to captivate players. It has a sleek user interface that clearly displays the game board and control buttons for a seamless gaming experience.

### User Stories

#### First Time Visitor Goals

* **User story 1: As a first-time visitor**

  * I want to easily find and understand the instructions for playing Tic-Tac-Toe against the computer, so I can start playing immediately without prior knowledge of the game.

#### Returning Visitor Goals

* **User story 2: As a returning visitor**

  * I wish to see any new features or updates added to the game since my last visit, such as improved AI difficulty levels or additional customization options, to keep the gameplay exciting and challenging.

#### Frequent Visitor Goals

* **User story 3: As a frequent visitor**

  * I am interested in providing feedback on my gaming experience through a simple and accessible form, hoping to see my suggestions or reported issues addressed in future updates to improve the game for myself and others.

- - -

## Design

### Design and Colour Scheme

The design philosophy embraces a balance between vibrancy and usability. I've chosen a color scheme that's both playful and sophisticated, aiming to captivate users while ensuring a seamless experience. The objective is to create a visually engaging interface that feels modern and dynamic.

The gradient across the body sets a dynamic stage, while the colour use for text maintains clarity and readability, providing a modern twist to the traditional black on white.Highlights for the reset & feedback button and colour for cell borders and shadows emphasize key interactions, making the website not only visually striking but also intuitive to navigate.

My approach to the color scheme is rooted in creating a modern, engaging, and accessible online environment that resonates with users across various touchpoints. The choice of colors and their application across different elements of the website is designed to create a cohesive and engaging user experience.

### Index page

The design focuses on distinguishing game elements while maintaining a cohesive theme. The objective with the colour for cell input and borders is to ensure game elements are easily identifiable, yet integrated within the overall design aesthetic. The vibrant colour for the reset button is intended to draw attention to game functionality, enhancing user interaction.

### Form page

 The aim here is to create a user-friendly form experience that encourages interaction. The colour for the form container background adds a soft, welcoming touch, while the colour for error messages ensures they are noticeable, aiding in user correction and guidance.

#### Body

 ![x](/documentation/doc-images/body-gradient.webp)

#### Colour palette

 ![x](/documentation/doc-images/colour-palette.webp)

### Typography

* Google Fonts was used to import the chosen fonts for use in the site. I used [Google Fonts](https://fonts.google.com/) as it doesn't require you to download the font.
* My choice was based on readability and that I find the fonts to convey a neutral, easy to read feeling.
* Chosen fonts are: Open Sans with fallback sans-serif for the Body, and for game board cell it is 'Acme', 'Open Sans', sans-serif. The h1 on landing page is font Mochiy Pop One  .
* I've included a few font weights to have the possibility of variation.

#### Body - Opens Sans: Regular 400, Medium 500, Bold 700

![x](/documentation/doc-images/opensans-400.webp)

![x](/documentation/doc-images/opensans-m500.webp)

![x](/documentation/doc-images/opensans-b700.webp)

#### Game board cell input - Acme: Regular 400

![x](/documentation/doc-images/acme-xo-400.webp)

#### Landing page h1 - Mochiy Pop One: Regular 400

![x](/documentation/doc-images/mochiy-pop-one-400.webp)

### Imagery

Images were not utilized.

### Wireframes

Wireframese created for mobile, tablet and desktop using 'Balsamiq'

#### Mobile

![x](/documentation/wireframes/wireframe-mobile.webp)

#### Tablet

![x](/documentation/wireframes/wireframe-tablet.webp)

#### Desktop

![x](/documentation/wireframes/wireframe-desktop.webp)

#### Side-by-side

![x](/documentation/wireframes/wireframe-sidebyside.webp)

### General features on each page

## Structure & Features

* All Pages on the website are responsive and have a favicon in the browser tab
* A 24 hour clock is included in the footer of the index page.
* A thank you note in the footer of the form page.

The website comprises

* 3 HTML pages
* 3 JavaScripts
* 1 Stylesheet

### Captured screenshots of the website

#### The favicon

A favicon, short for "favorite icon", is a small image that represents a website. This image appears in various places, but most commonly in the browser tab next to the page title. It helps users identify a webpage at a glance, which can be particularly useful when multiple tabs are open.

![x](/documentation/doc-images/favicon-on-tab.webp)

#### The Navbar

The navigation bar at the top allows users to switch between the game and a feedback form, emphasizing user interaction and improvement of the gaming experience. The navigation bar is structured with two main divisions: a logo and a menu. The menu division contains an unordered list with two list items. Each list item contains a link that redirects to a different page on the website. The first link redirects to the index page, the second link redirects to a feedback form page (form.html).

![x](/documentation/doc-images/navbar-mob.webp)   ![x](/documentation/doc-images/navbar.webp)

#### The Logo

The logo is visible on all three pages it contains a link that redirects to the index page when clicked. 
![x](/documentation/doc-images/logo.webp)

#### The Footer

Landing page and Form page footer

The footer features a 24-hour clock, adding a playful touch to the site, and a thank you note in the form page footer.

![Landing](/documentation/doc-images/footer-index.webp)   ![Form](/documentation/doc-images/footer-form.webp)

#### Home / landing page

The main sections of the page include an introduction to the game, instructions on how to play, the game board itself, and buttons for restarting the game and submitting feedback. The "How to Play" section is initially hidden, with a button provided to show or hide the instructions, catering to both new and returning players by allowing them to access the game rules on demand.

The game board is interactive, consisting of nine clickable cells where players take turns marking their symbols. The design emphasizes accessibility and user-friendly navigation, with each cell being keyboard accessible and labeled for screen readers.

![x](/documentation/doc-images/cell-hover.webp)   ![x](/documentation/doc-images/index-iph14-pro-max-430.webp)   ![x](/documentation/doc-images/index-dtop.webp)

Home modal

The page also includes a modal for displaying the outcome of the game (win, lose, or draw), enhancing the interactive gaming experience.

![x](/documentation/doc-images/index-modal-iph14-pro-max-430-m.webp)   ![x](/documentation/doc-images/index-modal-dtop.webp)

#### Form with error messages and modal

The form page includes a feedback form with fields for the user's first name, last name, email address, and a text area for the feedback message. Each input field has an associated error message container for form validation errors. Also a modal for displaying feedback submission confirmation.

![x](/documentation/doc-images/form-iph14-pro-max-430.webp)   ![x](/documentation/doc-images/form-dtop.webp)

Error messages

![x](/documentation/doc-images/form-error-iph14-pro-max-430.webp)   ![x](/documentation/doc-images/form-error-dtop.webp)

Modal

![x](/documentation/doc-images/form-modal-iph14-pro-max-430.webp)   ![x](/documentation/doc-images/form-modal-dtop.webp)

#### A 404 page for when users land on a non-existent page

It is designed to handle requests for non-existent routes on the site. The section contains a navigation bar with links to the game page and the feedback form page. A main content area with a humorous message indicating that the user has navigated to a non-existent page, likening it to making a move outside the Tic-Tac-Toe grid. It encourages the user to return to the game or provide feedback if they're done playing.
Links to navigate back to the game or to the feedback form and a thank you message.

![x](/documentation/doc-images/404-iph14-pro-max-430.webp)   ![x](/documentation/doc-images/404-dtop.webp)

### Future Implementations

In no specific priority order:

* Implement a score meter.
* Introduce an AI opponent with selectable difficulty levels (easy, medium, hard), making the game more challenging and engaging for single players.
* Allow players to play against friends or random opponents over the internet, possibly using WebSockets for real-time gameplay.
* Offer players the ability to customize the game board and symbols (X and O) with different themes or colors.
* Implement a leaderboard system to track high scores or fastest wins, along with achievements for completing certain challenges.
* Add new game modes, such as timed matches, where players have a limited amount of time to make their move, or a "Best of 3" series.
* Allow players to undo their last move, making the game more forgiving, especially for new players.
* Improve accessibility by ensuring the game can be fully navigated and played using keyboard shortcuts.
* Enhance support for screen readers with better ARIA labels and roles, making the game accessible to visually impaired users.

### Accessibility

While developing the website, I've focused on its accessibility. This goal was achieved through the following methods:

* Using semantic HTML.
* Using a hover state on all buttons on the site to make it clear to the user if they are hovering over a button.
* Choosing a sans serif font for the site - these fonts are suitable for people with dyslexia.
* The use of aria-labelledby and attributes in the game's buttons and player sections improves the accessibility of dynamic content and interactive elements for users with screen readers.
* The CSS includes styles for :hover and :focus pseudo-classes on buttons and game cells
* The CSS media queries for different screen sizes and the flexible grid layout for the game board ensure that the game is usable across a variety of devices, including those with screen magnifiers.
* The game primarily uses textual content and CSS for styling, which naturally makes it more accessible.
* The use of colors is considered for visibility.
* No contrast errors were detected in the page;

  ![x](/documentation/doc-images/contrast-wave.webp)

  * For more details pls see:
    * [Wave Web Accessibility Evaulation Tool - INDEX.HTML](https://wave.webaim.org/report#/https://jaqikal.github.io/tic-tac-toe/index.html)
    * [Wave Web Accessibility Evaulation Tool - FORM.HTML](https://wave.webaim.org/report#/https://jaqikal.github.io/tic-tac-toe/form.html)
    * [Wave Web Accessibility Evaulation Tool - 404.HTML](https://wave.webaim.org/report#/https://jaqikal.github.io/tic-tac-toe/404.html)

#### Accessibility improvements

* [Wave](https://wave.webaim.org/report#/https://jaqikal.github.io/tic-tac-toe/index.html) highlighted an alert indicating there's a "Redundant link" issue on my page, where both the logo and the 'game' menu item link to index.html, suggesting they lead to the same URL. The recommendation from the tool is to merge these overlapping links into a single link, advising to streamline redundant text or alt text for elements like images within the same link. Despite this suggestion, I've decided to leave it as is because I want the logo to remain clickable.

- - -

## Technologies Used

### Languages Used

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://sv.wikipedia.org/wiki/Javascript)

### Frameworks, Libraries & Programs Used

* [Am I Responsive?](http://ami.responsivedesign.is/) - To show the website image on a range of devices.
* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.
* [Coolors](https://coolors.co/) - Used to create the colour scheme palette.
* [CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) - Used to check code ensuring that my CSS is error-free and adheres to the latest web standards.
* [DevTools](https://developer.chrome.com/docs/devtools) -  help in edit pages on-the-fly and diagnose problems quickly.
* [Diffchecker - text](https://www.diffchecker.com/text-compare/) - used to check code snippets
* [Favicon.io](https://favicon.io/) - To create favicon.
* [Font Awesome](https://fontawesome.com/) - For the iconography on the website.
* [Git](https://git-scm.com/) - For version control.
* [Github](https://github.com/) - To save and store the files for the website.
* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.
* [Markup Validation Service](https://validator.w3.org/) - Used to check code ensuring that my HTML is error-free and adheres to the latest web standards.
* [Responsinator](http://www.responsinator.com/) -  Used to test the sites resposiveness on mobile viewport.
* [Tiny PNG](https://tinypng.com/) - To compress images.
* [Visual Studio Code](https://code.visualstudio.com/) - a free and open-source code editor
* [Web Disability Sim](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) - a google chrome extension that allows you to view your site as people with accessibility needs would see it.

## Deployment & Local Development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, [JaqiKal/wellness-therapy](https://github.com/JaqiKal/wellness-therapy)
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

This site is deployed using GitHub Pages - [Manus Herba](https://jaqikal.github.io/wellness-therapy/services.html)

### Local Development

#### How to Fork

To fork the wellness-therapy repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [JaqiKal/wellness-therapy](https://github.com/JaqiKal/wellness-therapy)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the zone-lymphatic-therapy repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [JaqiKal/wellness-therapy](https://github.com/JaqiKal/wellness-therapy)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing & Bugs

### Results

Please refer to [TESTING.md](TESTING.md) file for all testing and trouble shooting carried out.

- - -

## Credits

### Code Used

I have used different sources to get more information and understand how to code:

* [Favicon.io](https://favicon.io/favicon-converter/): Used to create the site Favicon and provided the code in the head of all pages.
* In landing  page I have amended code from:
  * Clock in footer [w3shools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock)
  * Modal Dialog: [w3school](https://www.w3schools.com/w3css/w3css_modal.asp)
  * Modal box: [w3school](https://www.w3schools.com/howto/howto_css_modals.asp)
  
* In form page I have amended code from:
  * Event Handlers: [elated-com](https://www.elated.com/events-and-event-handlers/)
  * Event Listeners: [w3school](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
  * Modal Dialog: [w3school](https://www.w3schools.com/w3css/w3css_modal.asp)
  * Modal box: [w3school](https://www.w3schools.com/howto/howto_css_modals.asp)
  * Form validation: [blog](https://blog.bitsrc.io/you-have-been-doing-form-validation-wrong-8b36430d63f6)
  * Form validation: [w3school](https://www.w3schools.com/js/js_validation.asp)
  * For each loop: [w3school](https://www.w3schools.com/jsref/jsref_foreach.asp)
  * Tutor service helped me with a bit of psudocode and thoughts on how to trim whitespace in the form: ```if userInput.startsWith(" ") {action for error}```

* The remaining code was developed by me, drawing inspiration and assistance from extensive online research, including searching on Google and examining other developers' code. I selected ideas and snippets that seemed promising, adapted them, and integrated these modified snippets into my own code to ensure they worked seamlessly with my project.

### Content

Website content crafted by the developer.

###  Media

Media were not utilized.

###  Acknowledgments

I would like to acknowledge the following people:

* My mentor [Jubril Akolade](https://github.com/jubrillionaire/) for all his help and advice throughout the project.
* The whole team at [Code Institute](https://codeinstitute.net) for their teaching and support.
* To all engaged fellow student at all channels and a special shout out to slack channel community sweden.
* My friends and family, who are playfully teasing me because they always manage to beat the computer at tic-tac-toe. :).
