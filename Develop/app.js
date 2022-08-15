const inquirer = require("inquirer");
const fs = require("fs");  

// inquier to ask/generate  questions
inquirer.prompt(
  [
      {
        type: "input",
        name: "title",
        message: "Please Enter your title",
        // validate property to check if the input is empty
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },
      {
        type: "input",
        name: "description",
        message: "Please Enter your description",
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
        name: "instructions",
        message: "Instructions to be followed?",
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
        name: "credits",
        message: "Credit for assisting with project?",
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
      {
        type: "input",
        name: "git",
        message: "What is your GitHub link?",
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },
      {
        type: "input",
        name: "linkden",
        message: "What is your linkden address?",
        validate: (value)=>
        {if (value) {return true;}
        else {return "I need a value to continue";}
        }
      },
    ]).then(({
      title,
      description,
      installation,
      instructions,
      usage,
      credits,
      license,
      username,
      email,
      git,
      linkden,
  }) => {
    // template to be used
    const template = ` # ${title}

## Description
${description}

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)

# Installation
${installation}

# Usage
${usage}

# Instructions
${instructions}

# License
${license}

# Credits
${credits}



# Contact
GitHub Username: ${username}
GitHub Link: ${git}
Linkden: ${linkden}
Email: ${email}`;
    //function  to create readme using fs
    createNewFile(title, template);
  }
  );
  // creating the createNewFile function
  function createNewFile(fileName, data) {
    //fs
    fs.writeFile( `./${fileName.toLowerCase().split(" ").join("-")}.md` ,data, (err) => {
      if (err){
        console.log(err);
      }
      else {
        console.log("Successfully created a new file");
      }
    })
    }



         
   
