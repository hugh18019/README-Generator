// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if( license === 'none' ) {
    return "";
  }
  switch ( license ) {
    case 'MIT':
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break;
    case 'APACHE 2.0':
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      break;
    case 'GPL 3.0':
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
      break;
    case 'BSD 3':
      return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if( license === 'none' ) {
    return "";
  }
  switch ( license ) {
    case 'MIT':
      return "https://opensource.org/licenses/MIT"
      break;
    case 'APACHE 2.0':
      return "https://opensource.org/licenses/Apache-2.0"
      break;
    case 'GPL 3.0':
      return "https://www.gnu.org/licenses/gpl-3.0"
      break;
    case 'BSD 3':
      return "https://opensource.org/licenses/BSD-3-Clause"
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  var licenseBadge = renderLicenseBadge( license );
  var licenseLink = renderLicenseLink( license );
  return `${ licenseBadge }  
  ${ licenseLink }`;
}

// TODO: Create a function to generate markdown for README
// data is the string of user input to terminal prompts passed in, and is an object of the format { key : value }
function generateMarkdown(data) {

  var { username, email_address, title, description, license, dependencies, packages } = data;
  console.log( data );
  console.log( username );
  console.log( email_address );
  console.log( title );

  var licenseSection = renderLicenseSection( license );
  title = title.trim().split(' ').join('-');

  return `## ${ title } 
  ${description}

  ### Table of Contents
  [Installation](#Installation)  
  [Usage](#Usage)  
  [Contributors](#Contributors)  
  [Link to a Video Demo](#Demo)  
  [License](#License)

  <a name="Installation"></a>
  ## Installation
  Run the following command to install all dependencies.
  > ${ dependencies }

  Run the following command to install the required inquirer package.
  > ${ packages }

  <a name="Usage"></a>
  ## Usage
  First navigate to the root of the project directory.
  Then run the command "node index.js".
  Then answer each prompt.

  ![alt text](assets/images/usage.png)

  <a name="Contributors"></a>
  ## Contributors
  > ${ username }  
  > Email: ${ email_address }
  
  <a name="Demo"></a>
  ## Link to a Video Demo  
  > https://drive.google.com/file/d/1T2WfEt4MbN9mIdMw1UvDNP_6WnWt-Kn-/view?usp=sharing

  <a name="License"></a>
  ## License  
  > ${ licenseSection }

  `;



  }
  


module.exports = generateMarkdown;

