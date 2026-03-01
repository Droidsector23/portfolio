
## Introduction to JavaScript and Projects 
What do beginning developers like to work on?  Everyones says the best way to learn a language is to build something. What would beginning developers like to build? 
- [Geeks for Geeks Research Ideas](https://www.geeksforgeeks.org/top-10-projects-for-beginners-to-practice-html-and-css-skills/#)
    - Talk to someone who rembers their 1st Web project.  What did the build?
    - Ask someone what they need.   It is always best to be working on something that is useful.
    - Think about your school year.  Computer Science is often thought about as a tool box.  How would you use the tools of Computer Science to help you become a better student this year? 

### Importance of Designing Before Coding
It's important to design your site using a resource like canva or google drawings before hand because it allows you make a plan on how your elements are going to work together before you start coding. This eliminates a lot of future headache and frustration. 

### How to Pair Program/Split up Work: 
The best way to split work between people is to split major features up, so that you can work on them seperately without interfering with each other. After that, you can start integrating your code, which requires more collaboration. Another way to split up work in pair programming is to have one person code, while the other one reviews their code, then switch periodically. 

### Create a Cookie Clicker Game
- Add 1 point every time the user clicks on the "cookie" or whatever icon you choose

> 90% Hack: add sound effects to the "cookie" when you click it

> 100% Hack: add a shop to buy workers to increase cookie count passively. You can take a look at the [original project](https://orteil.dashnet.org/cookieclicker/) to see how the shop works.

### Complete a Calculator
Students can grab a simple calculator using HTML, CSS, and JavaScript. This project will introduce them to basic user interface design and event handling in JavaScript.
- Learn about STYLE with SASS and SCRIPT with JavaScript
- Show how style usage is integrated into the GITHUB THEME

* Many calculators are available on Internet and ChatGPT, search "calculator in javascript".  Additionally, Teacher has these calculators...
    * [Calculator]({{site.baseurl}}/javascript/project/calculator)
        > 90% Hack: Add 3 more operations on the calculator (EX: exponent). Hint: take a look at the calculator function in the calculator markdown file.

        > 100% Hack: Implement a calculations history. A good example is the google chrome [default calculator](https://www.google.com/search?q=calculator)
    * [Binary Calculator]({{site.baseurl}}/javascript/project/binary-calculator)
        > 90% Hack: Fix overflow/underflow error. Take a look at when the binary bit is all 1s or 0s and see what happen when you try to add 1 when it's 255 or subtract 1 when it's 0.

        > 100% Hack: Add 2 more sets of binary manipulation sections and then display those binary values as colors. Take a look at the [RGB Section](https://www.csfieldguide.org.nz/en/chapters/data-representation/images-and-colours/) of this page to see what's expected.

###  Complete a Game
Building a game is an excellent project for students to explore more advanced JavaScript concepts, such as game logic, handling user interactions, and managing state.

* Many Tic Tac Toe games are available on Internet and ChatGPT, search "tic-tack-toe in javascript".  Additionally, Here are a couple of games that are very common...
    * [Snake Game]({{site.baseurl}}/javascript/project/snake)
        > 90% Hack: Make grid and make it so that arrow keys dont move the screen around. [Original game](https://www.google.com/search?q=snake)

        > 100% Hack: Make powerups (EX: Extra life)        
    * [Game of Life]({{site.baseurl}}/javascript/project/game-of-life)
        > 90% Hack: Make a counter that automatically updates for each round that plays

        > 100% Hack: Make a slider to increase x and y length of the game of life grid

### Explore the world of API's
There are many providers of data on the internet, they service that data through API's.  As a programmer,we find data, searc data and format data.  We NEVER turn in "static" data that we type into Javascript.  There is ALWAYS a BETTER WAY than static data.

#### iTunes API
The music API example is an endpoint for itunes.apple.com.   A request to itunes providea a response.   They create and manage the iTunes data, we code and do not perform data entry.   The formatting of the response provides the Input and Output interaction with the itunes data.  

We do not create or manage their data.  The itunes system has  backend processes that create and store data.  

As we play with the API, we itunes could provide:

- A better starting screen.  Perhaps provide sample queries on screen.
- Provide local storage to show recent or liked queries by the user.
- Have interaction between this API and other functions on our site.  For instance, we could allow music selection to dictate background music while playing a platformer game.

But additionally, we could explore backend service from itunes to:

- Show most popular queries.
- Show songs by genre.
- Show songs by era.

