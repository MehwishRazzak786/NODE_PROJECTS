#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([

    { message: chalk.bgBlue.bold.italic.red("Enter your first number: "),
      name: "firstNumber",
      type: "number"
    },

    { message: chalk.bgBlue.bold.italic.redBright("Enter your second number: "),
      name: "secondNumber",
      type: "number"
    },

    { message: "Select the basic operator to perform operations: ",
      name: "Operator",
      type: "list",
      choices: [
        chalk.yellow('Addition: (+)'),
        chalk.magenta('Subtraction: (-)'),
        chalk.cyan('Multiplication: (*)'),
        chalk.greenBright('Division: (/)'),
        chalk.whiteBright('Remainder: (%)')
    ],
  },
]);
// Conditional Statements
if (answer.Operator === chalk.yellow('Addition: (+)')) {
    console.log(chalk.blue.bold.italic(`\nResult is:  ${answer.firstNumber + answer.secondNumber}\n`));

} else if (answer.Operator === chalk.magenta('Subtraction: (-)')) {
    console.log(chalk.blue.bold.italic(`\nResult is:  ${answer.firstNumber - answer.secondNumber}\n`));

} else if (answer.Operator === chalk.cyan('Multiplication: (*)') ) {
    console.log(chalk.blue.bold.italic(`\nResult is:  ${answer.firstNumber * answer.secondNumber}\n`));

} else if (answer.Operator === chalk.green('Division: (/)')) {
    console.log(chalk.blue.bold.italic(`\nResult is:  ${answer.firstNumber / answer.secondNumber}\n`));

} else {
    console.log(chalk.blue.bold.italic(`\nResult is:  ${answer.firstNumber % answer.secondNumber}\n`));
}