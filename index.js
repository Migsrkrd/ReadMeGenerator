const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err)=>
    err ? console.error(err) : console.log('Sucess! Go checkout your new ReadMe!'))
}


// Create a function to initialize app
function init() {

// Inquirer questions for node user

    inquirer
.prompt([
{
type: "input",
message: "What is the title of your project?",
name: "title"
},
{
type: "input",
message: "Please enter any information you would like to include in your Description section:",
name: "Description"
},
{
type: "input",
message: "Please enter any instructions you would like to include in your Installation section:",
name: "Installation"
},
{
type: "input",
message: "Please enter any information you would like to include in your Usage section:",
name: "Usage"
},
{
type: "input",
message: "Please explain your projects contribution guidlines:",
name: "Contributing",
},
{
type: "input",
message: "Please enter any information regarding tests:",
name: "Tests"
},
{
type: "checkbox",
message: "What license did you use for your project?",
choices: ["MIT License", "Apache License 2.0", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0"],
name: "license"
},
{
type: "input",
message: "Please enter your Github username:",
name: "Username"
},
{
type: "input",
message: "Please enter your email address:",
name: "Contact"
},
])

// Take the response from node and create a new md file with the name "NEWREADME" and fill the other parameter with the response data

.then((response) => {
    writeToFile("NEWREADME.md", response)
})
}

// Function call to initialize app
init();
