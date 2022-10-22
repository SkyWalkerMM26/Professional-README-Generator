// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = (answers) =>
    `# Project Title

    <img src="https://img.shields.io/badge/LICENSE-${answers.license}-COLOR.svg?logo=LOGO">
    ## Description
    
    ${answers.description}
    
    ## Table of Contents (Optional)
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    ${answers.installation}
    
    ## Usage
    
    ${answers.input}
    
    ## Contributing
    
    ${answers.dependecies}
    
    ## Tests
    
    ${answers.tests}
    
    ## Questions
    If you have any questions, open an issue or contact me directly at ${answers.email}. You can find more of my work at ${answers.gitHub}.`;

    inquirer
        .createPromptModule([
    {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub Username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
      },
      {
        type: 'input',
        name: 'name',
        message: "what is your project's name?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?',
      },   
      {
        type: 'input',
        name: 'dependencies',
        message: 'what command should be run to install dependencies?',
      },   
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
      },   
      {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?',
      },  
    ])
    .then((answers) => {
    const data = questions(answers);

    fs.writeFile("Generate ReadMe", data, (err) => 
        err ? console.log(err) : console.log('Generating README...')
    );
});


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
 