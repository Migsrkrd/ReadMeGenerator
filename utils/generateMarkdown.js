// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require("fs")
function renderLicenseBadge(license) {}
//have a couple of license options

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license = data.License
  var licenseLink;
  if(license = "MIT License"){
    licenseLink = "https://mit-license.org/"
  }
  else if(license = "Apache License 2.0"){
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
  }
  else if(license ="BSD 3-Clause 'New' or 'Revised' License"){
    licenseLink = "https://choosealicense.com/licenses/bsd-3-clause/"
  }
}
//return the link to the license
//could use a switch or if statements

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
//create conditional statement checking if license exists
//check readme template to see what is needed here
//call renderLicenseBadge and renderLicenseLink 
//return badge, link, and extra sting content together as a template literal


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.Description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution-Guidelines](#Contribution-Guidelines)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## Contribution-Guidelines

  ${data.Contributing}

  ## Tests

  ${data.Tests}

  ## License

  ${data.license}

  ## Questions

If you have anymore questions please reach out to me at my email: ${data.Contact}, or visit my [Github Account](https://github.com/${data.Username})
`;
}

//call license functions in generate markdown
//create layour of what you want as a readme layout with template literals

module.exports = generateMarkdown;
