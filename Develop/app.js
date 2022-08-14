const inquirer = require("inquirer");
const fs = require("fs");
const {message} = require("statuses");
  

// inquier to ask/generate  questions
inquirer.prompt(
    [
      {
        type: "input",
        name: "title",
        message: "Please Enter your titlte (Required)",
        // validate property to check if the input is empty
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },
      {
        type: "input",
        name: "description",
        message: "Please Enter your Description (Required)",
        // validate property to check if the input is empty
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
        
      },
      {
        type: "input",
        name: "installation",
        message: "What needs to be installed?",
        // validate property to check if the input is empty
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },
      {
        type: "input",
        name: "usage",
        message: "How do you use this?",
        // validate property to check if the input is empty
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },
      {
        type: "input",
        name: instructions,
        message: "Instructions to be followed?",
        // validate property to check if the input is empty
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },
      {
        type: "input",
        name: "contributing",
        message: "Who contributed?",
        // validate property to check if the input is empty
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },   
      {
        // list of license
        type: "list",
        name: "license",
        message: "What license do you want to use?",
        choices: [
          "MIT",
          "ISC",
          "Apache",
          "GPL",
          "BSD",
          "None",
        ],
        // validate property to check if the input is empty
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
        
      },
      {
        type: "confirm",
        name: "contributing",
        message: "Would you like to add a Contributor",
        default: false,
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }

      },
      //gitHub username
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },
      //email address
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },

    ]

)
         
   
