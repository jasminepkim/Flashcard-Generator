// IMPORT MODULES
var BasicCard = require('./basicCard.js');
var Questions = require('./basicQA.js');
var inquirer = require('inquirer');
var fs = require('fs');
// global score counter
var score = 0;
var cards = [];

Questions.forEach(function (question) {
    cards.push(new BasicCard(question.front, question.back));
})

// console.log('cards', cards);

// Call the play function to play the game 
play();

function play() {
    // var to hold questions to increment
    var i = 0;

    function questionAsker() {
        // console.log('front',cards[i].front)
        inquirer.prompt({
            type: "input",
            name: "user",
            message: cards[i].front

        }).then(function (answer) {
            i++;

            if (i < cards.length) {
                console.log("Your current score is: " + score);

                if (answer === cards[i].back) {
                    console.log("Great job, you are correct!");
                    score++;
                } else {
                    console.log("Sorry, you are incorrect. The correct answer is: " + cards[i].back);
                    score--;
                }
                questionAsker();
            }
        });
    }
    questionAsker();
} // to close out the PLAY function