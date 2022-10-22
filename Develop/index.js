// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
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
];


function writeToFile(filename, data){
    fs.writeFile("Generate-ReadMe.md", data, (err) => {
    err ? console.log(err) : console.log('Generating README...')});

    const data =
    ``
};

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile()
    })
}

// Function call to initialize app
init();
 