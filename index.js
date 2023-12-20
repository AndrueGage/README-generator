// Node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Array of questions that the user will need to answer
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'Whats the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Tell me about your project! Be as descriptive as possible.',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license you used for this project.',
        choices: [
            'Apache 2.0 License',
            'GNU GPL v2',
            'GNU AGPL v3',
            'GNU GPL v3',
            'MIT',
            'Mozilla Public License 2.0',
        ],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Give some test examples of your project.'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => (
        err ? console.error(err) : console.log('README.md has been successfully created!')
    ));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => writeToFile('README.md', generateMarkdown(data)))
}

// Function call to initialize app
init();
