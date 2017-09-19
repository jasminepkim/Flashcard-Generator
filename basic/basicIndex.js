// IMPORT MODULES
var BasicCard = require('./basicCard.js');
var Questions = require('./basicQA.js');
var inquirer = require('inquirer');
var fs = require('fs');
// global score counter
var correctScore = 0;
var incorrectScore = 0;
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
            var input = answer.user.toUpperCase();

            if (i < cards.length) {

                if (input === cards[i].back.toUpperCase()) {
                    console.log("Great job, you are correct!");
                    correctScore++;
                    console.log("\--------------------------------");
                } else {
                    console.log("Sorry, you are incorrect. The correct answer is: " + cards[i].back);
                    incorrectScore++;
                    console.log("\--------------------------------");
                }
                i++;
                questionAsker();
            }
            // to end the game
        }).catch(function () {
            console.log("Thanks for playing, and see your total scores below:");
            console.log("\--------------------------------");
            console.log("\Correct: " + correctScore + " || Incorrect: " + incorrectScore);
            console.log("\--------------------------------");
        });
    }
    questionAsker();
} // to close out the PLAY function