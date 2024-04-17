#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold.underline(`\n\t Welcome to the Currency-Converter-Application\n`))

// Define the list of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // European Currency(Euro)
    "JYP": 113, // Japanese Currency(Yen)
    "CAD": 1.3, // Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR": 277.70 // Pakistan Rupees
    // Add more currencies and their exchange rates here
}

// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.bgWhite.black("Select the currency to convert from : "),
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.bgWhite.black("Select the currency to convert into : "),
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.bgWhite.blue.bold("Enter the amount to convert : ")
    }
]);

// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

// Formula Of Conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

// Display the converted amount
console.log(chalk.bgWhite.blue.bold(`\n\tConverted Amount = ${chalk.green(converted_amount.toFixed(3))}`));