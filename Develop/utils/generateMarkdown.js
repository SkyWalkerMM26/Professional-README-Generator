const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "n/a"){
    return "![GitHub license](https://img.shields.io/badge/License-"${license}"-blue.svg)"
  } return "";
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
  if (license !== ""){
    return `\n- [License](#license)\n`;
    } return "";
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Project Title
    <img src="https://img.shields.io/badge/LICENSE-${data.license}-COLOR.svg?logo=LOGO">

    ## Description
    ${data.description}
    ## Table of Contents (Optional)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributions](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${data.installation}
    ## Usage
    ${data.input}
    ## Contributing
    ${data.dependecies}
    ## Tests
    ${data.tests}
    ## Questions
    If you have any questions, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.gitHub}.
`;
}

module.exports = generateMarkdown;
