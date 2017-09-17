// IMPORT MODULES
var BasicCard = require('./basicCard.js');
var BasicQA = require('./basicQA.js');
var inquirer = require('inquirer');
var fs = require('fs');

play();

function play() {
        // create new instance of the BasicCard function
        // var basic = new BasicCard(front, back);
    }

    // console.log(basic);

    inquirer.prompt({
        type: 'input',
        name: 'user',
        message: 'Q1 goes here...'
    })