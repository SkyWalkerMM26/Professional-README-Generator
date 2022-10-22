const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "mit" || "MIT"){
    return " ![License: MIT](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
  }else{
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ""
  if (license !== ""){
    let result = license.toLowerCase()
    return licenseLink = "https://choosealicense.com/licenses/"+result
  }else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `\n- [License](#license)\n`;
    }else{
    return "";
  }
}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}

 ${renderLicenseBadge(answer.license)}

  ## Description
  ${answer.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answer.installation}

  ## Usage
  Provide instructions and examples for use. Include screenshots as needed.

  ## Contributing
  ${answer.dependencies}

  ## Tests
  ${answer.test}

  ## Questions
  If you have any questions, open an issue or contact me directly at ${answer.email}. You can find more of my work at https://github.com/${answer.GitHub}.
`;
}

module.exports = generateMarkdown;
