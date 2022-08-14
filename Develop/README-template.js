const fs = require("fs");

//Generate Title

const generateREADME = (aboutTitle) => {
  return `
        # ${aboutTitle}

        ## Table of Contents
        * [Description](#description)
        * [Installation](#installation)
        * [Contributing](#contributing)
        * [Usage](#usage)
        * [Tests](#tests)
        * [Questions](#questions)
        * [License](#license)
    `;
};

// THEN a high-quality, professional README.md is generated
// with the title of my project and sections entitled Description, 
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//Generate Description
const generateDescription = (aboutDescription) => {
  return `
        ## Description
        ${aboutDescription}
    `;
};

//Generate Installation
const generateInstallation = (installation) => {
  return `
        ## Installation
        ${installation}
    `;
};

//Generate Usage
const generateUsage = (usage) => {
  return `
        ## Usage
        ${usage}
    `;
}

//Generate Questions
const generateQuestions = (questions) => {
  return `
        ## Questions
        ${questions}
    `;
}

//Generate License
const generateLicense = (license) => {
  return `
        ## License
        ${license}
    `;
}

//Generate Contributing
const generateContributing = (contributorData) => {
  
  // const { name, link } = contributorData;
  return `
        ## Contributing
        ${contributorData.name}
        ${contributorData.link}
    `;
}

// Create ReadMe File
const writeFile = (fileContent) => {
  fs.writeFile("./ReadMe.md", fileContent, (err) => {
    if (err) {
      throw err;
      return;
    }
  });
};

module.exports = {
  generateREADME,
  generateDescription,
  generateInstallation,
  generateContributing,
  generateLicense,
  generateQuestions,
  generateUsage,
  writeFile
}
