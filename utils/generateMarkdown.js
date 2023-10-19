//TODO: create a function to render the correlating badge for the selected license
function renderLicenseBadge(license) {
  if(license == "MIT License"){
    return `![Static Badge](https://img.shields.io/badge/License-MIT-blue)`
  }
  if(license == "Apache License 2.0"){
    return `![Static Badge](https://img.shields.io/badge/License-Apache2.0-blue)`
  }
  if(license =="BSD 3-Clause 'New' or 'Revised' License"){
    return `![Static Badge](https://img.shields.io/badge/License-BSD3-blue)`
  }
  if(license =="Boost Software License 1.0"){
    return `![Static Badge](https://img.shields.io/badge/License-Boost%20Software%201.0-blue)`
  }
  else {
    return "";
  }
}

//TODO: create a function to create license template literal and link
function renderLicenseLink(license) {
  var licenseLink;
  if(license == "MIT License"){
    licenseLink = `This projected uses ${license}. For more information visit [https://mit-license.org/](https://mit-license.org/)`
    return licenseLink;
  }
  if(license == "Apache License 2.0"){
    licenseLink = `This projected uses ${license}. For more information visit [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)`
    return licenseLink;
  }
  if(license =="BSD 3-Clause 'New' or 'Revised' License"){
    licenseLink = `This projected uses ${license}. For more information visit [https://choosealicense.com/licenses/bsd-3-clause/](https://choosealicense.com/licenses/bsd-3-clause/)`
    return licenseLink;
  }
  if(license =="Boost Software License 1.0"){
    licenseLink = `This projected uses ${license}. For more information visit [https://www.boost.org/LICENSE_1_0.txt](https://www.boost.org/LICENSE_1_0.txt)`
    return licenseLink;
  }
  else {
    return "There is no license for this project.";
  }
 

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseLink(data.license);
  renderLicenseBadge(data.license)
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}

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

  ${renderLicenseLink(data.license)}

  ## Questions

If you have anymore questions please reach out to me at my email: ${data.Contact}, or visit my [Github Account](https://github.com/${data.Username})
`;
}

module.exports = generateMarkdown;
