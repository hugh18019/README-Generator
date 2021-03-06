
// TODO: Include packages needed for this application
const generateMarkDownFn = require('./utils/generateMarkdown.js' );
var inquirer = require( 'inquirer' );
const fs = require( 'fs' );

// TODO: Create an array of questions for user input
const questions = [ 
'What is your Github username? ', 
'What is your email address? ', 
'What is your project name? ', 
'Please write a short description of your project ',
'What kind of license should your project have? ', 
'What command should be run to install dependencies? ',
'What command should be run to install other packages needed to use the application? ',
];

// A function that clears out content in the README.md file
function clearFile() {
    fs.writeFile('./README.md', '', function(){} );
}

// A function that takes user input data and passes it to the generateMarkDownFn to generate some markdown data.
// Then it writes the returned data to the README.md file.
function writeToFile( filename, data ) {
    clearFile();
    var mdData = generateMarkDownFn( data );

    fs.writeFile( filename, `${mdData}`, err => {
        if( err ) {
            console.error( err );
            return;
        }
    })
}

// Using the inquirer package to prompt the user for some input
inquirer.prompt ( [
   {
       name: 'username',
       message: `${ questions[0] }`,
       inputType: 'input'
   },
   {
        name: 'email_address',
        message: `${ questions[1] }`,
        inputType: 'input'
    },
    {
        name: 'title',
        message: `${ questions[2] }`,
        inputType: 'input'
    },
    {
        name: 'description',
        message: `${ questions[3] }`,
        inputType: 'input'
    }, 
    {
        name: 'license',
        message: `${ questions[4] }`,
        inputType: 'list',
        choices: [ 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE' ],
        default: 'MIT'
    },
    {
        name: 'dependencies',
        message: `${ questions[5] }`,
        inputType: 'input'
    }, 
    {
        name: 'packages',
        message: `${ questions[6] }`,
        inputType: 'input'
    }   
])
.then( (answer) => {
    writeToFile( './README.md', answer );
})


