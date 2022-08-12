const inquirer = require("inquirer");
const {
  generateREADME,
  generateDescription,
  generateInstallation,
  generateContributing,
  writeFile,
} = require("./README-template.js");

/*generateDescription,
generateInstallation,
generateUsage,
generateLicense,
generateContributing,*/
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please Enter your title (Required)",
    },
    {
      type: "input",
      name: "description",
      message: "Please Enter your Description (Required)",
    },
    {
      type: "input",
      name: "installation",
      message: "What needs to be installed?",
    },
  ]);
};

const promptUserContributing = (contributorData) => {
  console.log(`
    =================
    Add a New Contributor
    =================
  `);

  // If there's no 'contributor' array property, create one
  if (!contributorData) {
    contributorData = [];
  }

  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please Enter your Github username (Required)",
    },
    {
      type: "input",
      name: "link",
      message: "Please Enter your Github link (Required)",
    },
    {

      type: "confirm",
      name: "addContributor",
      message: "Would you like to add another contributor?",
      default: true,
      
    },
  ])
  .then((answers) => { 
    // If the user chose to add another contributor, call the function again
    if (answers.addContributor) {
      return promptUserContributing(contributorData);
    }
    // Otherwise, return the data
    return contributorData;
  })

};


promptUser().then((answers) => {
  console.log(answers.title);
  const title = generateREADME(answers.title);

  console.log(answers.description);
  const description = generateDescription(answers.description);

  console.log(answers.installation);
  const installation = generateInstallation(answers.installation);

  promptUserContributing().then((answers) => {
    console.log(answers.contributing);
    const contributing = generateContributing(answers.contributing);
    
    if (answers.contributing) {
      console.log(answers.contributing.name);
      console.log(answers.contributing.link);
    }
    else
    {
      console.log("No Contributors");
    }

    const fileContent = title + description + installation + contributing;

    writeFile(fileContent);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    console.log("Thank you for contributing, We have received your contribution! check out the ReadMe.md file for more information");
  });
});
