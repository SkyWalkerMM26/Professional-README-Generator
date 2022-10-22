// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub Username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: "what is your project's name?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps require to install your project ?',
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
];

// TODO: Create a function to write README file
const writeToFile = content => {
    return new Promise((resolve, reject) =>{
        fs.writeFile("./generateREADME.md", content, (err) => {
        err ? reject(err) : resolve('Generating README...')
        });
    }
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer){
        console.log(answer);
    var content = generateMarkdown(answer);
        writeToFile(content)
    });
}

// Function call to initialize app
init();

module.exports = questions;