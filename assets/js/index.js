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

${usage}

## How to Contribute

${contribute}

## Tests

${tests}

## Questions?

Have questions?\n 
Contact the author via [Email](mailto:${email})\n
Or check out their [Github](https://github.com/${github})



## License

${license} - See repo for detailed information.

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
        message: 'Provide instructions and examples for usage of you application.'
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
        message: 'How can others contribute to your project?'
    },
    {
        //Tests 
        type: 'input',
        name: 'tests',
        message: 'What are the instructions to test your application?'
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
    fs.writeFile(`./readme/${answers.title}.md`, mdWrite, (err)=>{
        err ? console.log(err) : console.log("Your file was created! Check your directory!")  
    })
})  }

startPrompt();
   
   
    //TODO:WHEN I choose a license for my application from a list of options
        //THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    

//TODO: provide a link to a walkthrough video that demonstrates its functionality.
    //Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer.
    //You’ll need to submit a link to the video _and_ add it to the README of your project.

//TODO: Update challenges README

//TODO: Doublecheck README copy instructions that nothing is missed
