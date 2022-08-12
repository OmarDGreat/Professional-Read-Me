const fs = require("fs");

//Generate Title

const generateREADME = (aboutTitle) => {
  return `
        # ${aboutTitle}
    `;
};

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

//Generate Contributing
const generateContributing = (contributing, link) => {
  return `
        ## Contributing
        ${contributing.name}
        ${contributing.link}
    `;
};

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
  writeFile,
};
