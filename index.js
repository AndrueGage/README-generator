// Node modules
const inquirer = require('inquirer');
const fs = requier('fs');
// Inquirer to generate questions
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'Whats the project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Tell me about your project!',
            name: 'about',
        },
        {
            type: 'input',
            message: 'How do you install your project?',
            name: 'installation',
        },
        {
            type: 'list',
            name: 'License',
            message: 'Select the license you used for this project.',
            choices: [
                'Apache 2.0 License',
                'GNU GPL v2',
                'GNU AGPL v3',
                'GNU GPL v2',
                'MIT',
                'Mozilla Public License 2.0',
            ],
        },
        {
            type: 'input',
            name: 'author',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'URL',
            message: 'What is the URL to your Github repo?'
        },
    ]
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
