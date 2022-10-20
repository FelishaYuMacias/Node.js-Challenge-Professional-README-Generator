//create variables for npm

const inquirer = require(`inquirer`)
const fs = require(`fs`)

//function that generates markdown file using answers from prompt
const mdCreate = ({title, description, installation, usage, license, contribute, tests, github, email}) =>
`
# ${title}

## Description

${description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

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

${license}

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
    fs.writeFile(`./readme/${answers.name}.md`, mdWrite, (err)=>{
        err ? console.log(err) : console.log("Your file was created! Check your directory!")  
    })
})  }

startPrompt();
    //TODO:WHEN I enter my project title
    //THEN this is displayed as the title of the README
    //TODO:WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        //THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    //TODO:WHEN I choose a license for my application from a list of options
        //THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    //TODO:WHEN I enter my GitHub username
        //THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    //TODO:WHEN I enter my email address
        //THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    //TODO:WHEN I click on the links in the Table of Contents
        //THEN I am taken to the corresponding section of the README
//The application will be invoked by using the following command: node index.js


//TODO:WHEN I am prompted for information about my application repository
    //THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//provide a link to a walkthrough video that demonstrates its functionality.
    //Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer.
    //You’ll need to submit a link to the video _and_ add it to the README of your project.

//TODO: Update challenges README

//TODO: Doublecheck README copy instructions that nothing is missed
