//create variables for npm

const inquirer = require(`inquirer`)
const fs = require(`fs`)

//function that generates markdown file using answers from prompt
const mdCreate = ({title, description, badge, installation, usage, license, contribute, tests, github, email}) =>
`
# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Badge
![license](https://img.shields.io/badge/license-${license}-blue)

## Installation

${installation}

## Usage

To use this application, ${usage}

## How to Contribute

To contribute to this project, ${contribute}

## Tests

To test this application, ${tests}

## Questions?

Have questions?\n 
Contact the author via [Email](mailto:${email})\n
Or check out their [Github](https://github.com/${github})



## License

${license} - See license file for more information.

`

//create a command-line application that dynamically generates a professional README.md file from a user's input

const startPrompt = () => {
    return inquirer.prompt([
    //create prompts for: 
    //badge
    {
        //Title, 
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        //Description, 
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        //Installation, 
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?'
    },
    {
        //Usage, 
        type: 'input',
        name: 'usage',
        message: 'Fill in the following information, "To use this application, {your input here}.'
    },
    {
        //License
        type: 'list',
        message: 'What license do you want?',
        name: 'license',
        choices: ['MIT','Apache 2.0', 'ISC', 'BSD3'],
    },
    {
        //Contributing, 
        type: 'input',
        name: 'contribute',
        message: 'Fill in the following information, "To contribute to this project, {your input here}.'
    },
    {
        //Tests 
        type: 'input',
        name: 'tests',
        message: 'Fill in the following information, "To test this application, {your input here}.'
    },
    {
        //Github
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        //email
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
]).then((answers)=>{
    // console.log(answers)
    const mdWrite = mdCreate(answers);
    fs.writeFile(`./sample-readmes/README.md`, mdWrite, (err)=>{
        err ? console.log(err) : console.log("Your file was created! Check your directory!")  
    })
})  }

startPrompt();
   
    
