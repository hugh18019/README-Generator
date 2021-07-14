const generateMarkDownFn = require('./utils/generateMarkdown.js' );
var inquirer = require( 'inquirer' );
const fs = require( 'fs' );

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile( fileName, data, err => {
        if( err ) {
            console.error( err );
            return;
        }
    } )
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
// init();

inquirer.prompt( [ 
    {
        name: 'question1',
        message: 'message1',
        type: 'input',
    }])
    .then( function( answer ) {
        console.log( answer.question1 );
        writeToFile( './README.md', answer.question1 );
    })


