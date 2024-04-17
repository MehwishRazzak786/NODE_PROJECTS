#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Welcome message
console.log(chalk.bold.underline.cyan`\n \t Welcome To Word-Count Application\n`);
const userAns: {
    sentence: string
}= await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: chalk.bold.underline.green("Enter Your Sentence To Count The Word : ")
        }
    ]
)

const words = userAns.sentence.trim().split(" ")

// print the array of words to the console
// console.log(words);

// print the word count of the sentence to the console
console.log(chalk.bold.underline.green(`\nYour sentence word count is ${words.length}`));
