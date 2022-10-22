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
function generateMarkdown(data) {
  return `# ${data.title}
  # Project Title
    <img src="https://img.shields.io/badge/LICENSE-${data.license}-COLOR.svg?logo=LOGO">
    ## Description
    ${data.description}
    ## Table of Contents (Optional)
    - [Installation](#installation)
    - [Usage](#usage)
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
