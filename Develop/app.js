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
      message: "Please Enter your titlte (Required)",
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

const promptUserContributing = () => {
  console.log(`
    =================
    Add a New Contributor
    =================
  `);
  return inquirer
  .prompt([
    {
      type: "confirm",
      name: "contributing",
      message: "Would you like to add a Contributor",
      default: false,

    }
  ]);
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
    
    console.log(answers.link);
    const link = generateContributing(answers.link);
    

    const fileContent = title + description + installation + contributing + link;
    writeFile(fileContent);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    console.log("Thank you for contributing");
  });
});
