const generateMarkDownFn = require('./utils/generateMarkdown.js' );
var inquirer = require( 'inquirer' );
const fs = require( 'fs' );

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [ 'What is your Github username? ', 'What is your email address? ', 
'What is your project "name"? ', 'Please write a short description of your project '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Pass data to generateMarkDownFn() to get markdown code
    var mdData = generateMarkDownFn( data );
    console.log( mdData );
    // console.log( data );


    fs.appendFile( fileName, `${mdData}\n`, err => {
        if( err ) {
            console.error( err );
            return;
        }
    } )
}

// TODO: Create a function to initialize app
async function init() {
    // clearFile();
    var promptName;
    var question;
    var inputType;

    for( let each of questions ) {
        switch( each ) {
            case 'What is your Github username? ' :
                // console.log( 'got here' );
                promptName = 'username';
                question = each,
                inputType = 'input'
                break;
            case 'What is your email address? ' :
                promptName = 'email_address';
                question = each,
                inputType = 'input'
                break;
            case 'What is your project "name"? ' :
                promptName = 'project_name';
                question = each,
                inputType = 'input'
                break;
            case 'Please write a short description of your project ' :
                promptName = "description";
                question = each,
                inputType = 'input'
                break;
        }
        console.log( `${promptName}` );
        const getAnswer = await inquirer.prompt([
            {
                name: `${promptName}`,
                message: `${each}`,
                inputType: `${inputType}`
            }
        ])
        .then( ( answer )  => {
            writeToFile( 'README.md', answer );
            // console.log( answer );
        })
    }

}

// Function call to initialize app
init();



function clearFile() {
    fs.writeFile('./README.md', '', );
}



/////////////////////////////////////////////Tester Code/////////////////////////////////////////////
// inquirer.prompt([ 
//     {
//         name: 'username',
//         message: 'What is your Github username? ',
//         type: 'input',  
//     },
//     ])
//     .then( ( answer ) => {
//         writeToFile( './README.md', answer );
// })
// inquirer.prompt([ 
//     {
//         name: 'email_address',
//         message: 'What is your email_address? ',
//         type: 'input',  
//     },
//     ])
//     .then( ( answer ) => {
//         writeToFile( './README.md', answer );
// })
// inquirer.prompt([ 
//     {
//         name: 'project_name',
//         message: 'What is your project "name"? ',
//         type: 'input',  
//     },
//     ])
//     .then( ( answer ) => {
//         writeToFile( './README.md', answer );
// })
// inquirer.prompt([ 
//     {
//         name: 'description',
//         message: 'Please write a short description of your project ',
//         type: 'input',  
//     },
//     ])
//     .then( ( answer ) => {
//         writeToFile( './README.md', answer );
// })


