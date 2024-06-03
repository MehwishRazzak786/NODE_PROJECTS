#! /usr/bin/env node
import inquirer from 'inquirer';
import { differenceInSeconds } from 'date-fns';
import chalk from 'chalk';
console.log(chalk.blueBright.underline.italic.bold(`\tWelcome TO COUNTDOWN_TIMER Application\n`));
//Asking User's Input with Validation
const res = await inquirer.prompt({
    type: 'number',
    name: 'userInput',
    message: chalk.cyanBright.underline.italic('Please Enter The Amount Of Seconds: '),
    validate: (input) => {
        if (isNaN(input)) {
            return chalk.green.italic.underline.bold("Please Enter Valid Number");
        }
        else if (input > 60) {
            return chalk.green.underline.italic.bold("Seconds Must Be In 60");
        }
        else {
            return true;
        }
    }
});
// Storing the User Input
let input = res.userInput;
//Countdown Timer Function
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log(chalk.cyanBright.underline.bold.italic("\tTimer has Expired"));
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(chalk.red.underline.bold(`\t\t${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`));
    }, 1000);
}
//Starting the Timer
startTime(input);
