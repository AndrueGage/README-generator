// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0 License'){
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'GNU GPL v2') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'GNU GPL v3'){
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'GNU AGPL v3') {
    return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
  }else if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }else if (license === 'Mozilla Public License 2.0'){
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
  } else {
    return '';
  };
};

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0 License'){
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  }else if (license === 'GNU GPL v2') {
    return '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'GNU GPL v3'){
    return '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'GNU AGPL v3') {
    return '[AGPL v3](https://www.gnu.org/licenses/agpl-3.0)';
  }else if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  }else if (license === 'Mozilla Public License 2.0') {
    return '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)';
  } else {
    return '';
  };
};

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '') {
    return `## License`
  }else{
    return '';
  };
};

// a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

 ${renderLicenseSection(data.license)}
 ${renderLicenseLink(data.license)}

  ## Questions
  If you have any questions, contact me on [Github](https://github.com/${data.userName}/) or email me at ${data.email}
`;
};

module.exports = generateMarkdown;