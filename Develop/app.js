const inquirer = require("inquirer");
const { generateREADME, writeFile} = require("./README-template.js");

const promptUser = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Please Enter your titlte (Required)",
        
      },
    //   {
    //     type: "input",
    //     name: "name",
    //     message: "What is your name? (Required)",
    //     validate: (nameInput) => {
    //       if (nameInput) {
    //         return true;
    //       } else {
    //         console.log("Please enter your name!");
    //         return false;
    //       }
    //     },
    //   },
    //   {
    //     type: "input",
    //     name: "name",
    //     message: "What is your name? (Required)",
    //     validate: (nameInput) => {
    //       if (nameInput) {
    //         return true;
    //       } else {
    //         console.log("Please enter your name!");
    //         return false;
    //       }
    //     },
    //   }


    ]);

};

promptUser()
.then(answers => {
    console.log(answers.title);
    const title = generateREADME(answers.title);
    writeFile(title);
})
