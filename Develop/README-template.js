const fs = require('fs');

//Generate Title

const generateREADME = (aboutTitle) => {
  
    return `
        # ${aboutTitle}
    `;
  };
  

// Create ReadMe

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
    writeFile
}
