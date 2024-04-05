#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Initialize user balance and pin code
let myBalance = 10000; // Dollar
let myPin = 7777; //pin code in number
// Print welcome message
console.log(chalk.cyan.bold.italic.underline(`\n \t\tWelcome To The ATM\n`));
//Prompt the user to enter their Pin
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellowBright.bold.italic.underline("\tEnter your 4-digit pin code: "),
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green.bold.italic.underline(`\n\tPin is correct.., Login Successfully!\n`));
    //console.log(`Your Current Account Balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.magenta.bold.italic.underline("\tPlease select transaction type: \n\n"),
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    // if user select withdraw
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.yellow.bold.italic.underline("Enter your amount: "),
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(chalk.greenBright.bold.italic.underline(`\nTransaction Successful\nYour remaining balance is ${balance}\nThank You For Using Banking Service..`));
        }
        else {
            console.log(chalk.red.bold.italic.underline(`\n\tTransaction Unsuccessful\n\tYou have Insufficient balance...`));
        }
    }
    // if user select fast cash
    else if (operationAns.operation === "Fast Cash") {
        let FastcashAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.magenta.bold.italic.underline("Please select the Amount: "),
                type: "list",
                choices: ["1000", "3000", "5000", "15000"],
            },
        ]);
        if (FastcashAns.amount <= myBalance) {
            let balance2 = myBalance - FastcashAns.amount;
            console.log(chalk.greenBright.bold.italic.underline(`\nTransaction Successful\nYour remaining balance is ${balance2}\nThank You For Using Banking Service..`));
        }
        else {
            console.log(chalk.red.bold.italic.underline(`\n\tTransaction Unsuccessful\n\tYou have Insufficient balance...`));
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.green.bold.italic.underline(`\nYour Account Balance is ${myBalance} \nThank You For Using Banking Service..`));
    }
    // Incorrect pin else command
}
else {
    console.log(chalk.red.bold.italic.underline(`\n\tInvalid pin code..Please try again!`));
}
