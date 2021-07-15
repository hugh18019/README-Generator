// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// data is the string of user input to terminal prompts passed in, and is an object of the format { key : value }
function generateMarkdown(data) {
  console.log( data );

  var key = Object.keys( data )[0];
  var value = Object.values( data )[0];
  console.log( Object.values( data ) );

  if( `${key}` != 'username' ) {
    return `# ${ key } 
    ${ value }`;
  }
  

  // switch ( key ) {
  //   case 'description':
  //     return `# ${value}`;
  //     break;
    // }
  
  // return `# ${data.title}
  
  
  // `;
}

// function tester() {
//   console.log( "got here" );
// }


module.exports = generateMarkdown;

