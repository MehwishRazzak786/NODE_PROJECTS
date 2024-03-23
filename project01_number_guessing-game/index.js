#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// 1) Computer will generate a random number..  _Done
// 2) User input for guessing number..  _Done
// 3) Compare user input with computer generated number and show result..  _Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: (chalk.bgYellow.green.bold.italic("Please guess a number between 1-6: ")),
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.bgBlue.red.bold.italic("Congratulations! you guessed right number."));
}
else {
    console.log(chalk.bgCyan.red.bold.italic("You guessed wrong number."));
}
