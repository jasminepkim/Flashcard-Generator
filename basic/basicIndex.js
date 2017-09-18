// IMPORT MODULES
var BasicCard = require('./basicCard.js');
var Questions = require('./basicQA.js');
var inquirer = require('inquirer');
var fs = require('fs');
// global score counter
var score = 0;
var cards = [];


Questions.forEach(function (question){
    cards.push(new BasicCard(question.front, question.back));
})

// console.log('cards',cards);
// Call the play function to play the game 
play();

// console.log(Questions[0].front);
// console.log(Questions[0].back);

function play() {
    // var to hold questions to increment
    var i = 0;

    function questionAsker () {
        // console.log('front',cards[i].front)
        inquirer.prompt({
            type: 'input',
            name: 'user',
            message: cards[i].front
        }).then(function (answer) {
            i++;
            if (i < cards.length) { // theres more questions
                // console.log(i, answer);
                questionAsker();
            }
        });
    }
    questionAsker();

    // inquirer.prompt({
    //     type: 'input',
    //     name: 'user',
    //     message: 'Question: ' + JSON.stringify(Questions[i].front)
    // });


} // to close out the PLAY function