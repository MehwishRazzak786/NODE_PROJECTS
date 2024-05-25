#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.cyan("*****************-------------------------******************"));
console.log(chalk.bold.cyan(chalk.bold.blue.underline("\n<<<<<<<<<<<<<<<<<<< WELCOME TO QUIZ APP >>>>>>>>>>>>>>>>>>>\n")));
console.log(chalk.bold.cyan("*****************-------------------------******************"));

// collect username

let name = await inquirer.prompt([
  {
    name: "user",
    type: "input",
    message: chalk.bold.blue.underline("\nEnter Your Name:"),
  },
]);

console.log(chalk.bold.cyan.underline(`\nHello! ${chalk.bold.magenta(name.user)} plz, attempt the following quiz:\n`));


// create object for quiz

let quiz1: {
  Qno_1: string;
  
} = await inquirer.prompt([
  {
    name: "Qno_1",
    type: "list",
    message: chalk.bold.blue.underline("\nQ1. What is TypeScript primarily used for?\n"),
    choices: [
     chalk.bold.magenta.underline.italic("A. Memory Management"),
      chalk.bold.magenta.underline.italic("B. Dynamic Typing"),
      chalk.bold.magenta.underline.italic("C. Static Typing"),
      chalk.bold.magenta.underline.italic("D. Asynchronous operations"),
    ],
  }
]);

let score = 0;

// make switch case for quiz 1

switch (quiz1.Qno_1) {
    case chalk.bold.magenta.underline.italic("C. Static Typing"):
        console.log(chalk.bold.green.underline.italic("\nQno_1: Correct Answer"));
        ++score;
        break;

    default:
        console.log(chalk.bold.red.underline.italic("\nIncorrect Answer"));
        console.log(chalk.bold.green.underline.italic("\nCorrect Answer is 'C'. Static Typing'."));
        
        break;
}

let quiz2: {
    
    Qno_2: string;
    
  } = await inquirer.prompt([
  {
    name: "Qno_2",
    type: "list",
    message: chalk.bold.blue.underline("\nQ2. How do you specify that a function does not return anything in TypeScript?\n"),
    choices: [
        chalk.bold.magenta.underline.italic("A. function myFunc(): undefined"),
        chalk.bold.magenta.underline.italic("B. function myFunc(): void"),
        chalk.bold.magenta.underline.italic("C. function myFunc(): null"),
        chalk.bold.magenta.underline.italic("D. function myFunc(): None"),
    ],
  },
]);

// make switch case for quiz 2

switch (quiz2.Qno_2) {
    case chalk.bold.magenta.underline.italic("B. function myFunc(): void"):
      console.log(chalk.bold.green.underline.italic("\nQno_2: Correct Answer"));
      ++score;
      break;

  default:
      console.log(chalk.bold.red.underline.italic("\nIncorrect Answer"));
      console.log(chalk.bold.green.underline.italic("\nCorrect Answer is 'B'. function myFunc(): void'."));
      
      break;
}
let quiz3: {
    
    Qno_3: string;
    
  } = await inquirer.prompt([
  {
    name: "Qno_3",
    type: "list",
    message: chalk.bold.blue.underline("\nQ3. How do you define an optional parameter in the TypeScript function?\n"),
    choices: [
        chalk.bold.italic.magenta.underline("A. function foo(param: string?)"),
        chalk.bold.italic.magenta.underline("B. function foo(param?: string)"),
        chalk.bold.italic.magenta.underline("C. function foo(param string=)"),
        chalk.bold.italic.magenta.underline("D. function foo(param string?)"),
    ],
  }
  ]);

  // make switch case for quiz 3

switch (quiz3.Qno_3) {
    case chalk.bold.italic.magenta.underline("B. function foo(param?: string)"):
        console.log(chalk.bold.green.underline.italic("\nQno_3: Correct Answer"));
        ++score;
        break;

    default:
        console.log(chalk.bold.red.underline.italic("\nIncorrect Answer"));
        console.log(chalk.bold.green.underline.italic("\nCorrect Answer is 'B'. function foo(param?: string)'."));
        
}

  let quiz4: {
    
    Qno_4: string;
    
  } = await inquirer.prompt([
  {
    name: "Qno_4",
    type: "list",
    message: chalk.bold.blue.underline("\nQ4. How do you define an array of strings in TypeScript?\n"),
    choices: [
        chalk.bold.magenta.underline.italic("A. Array<string>"),
        chalk.bold.magenta.underline.italic("B. string[]"),
        chalk.bold.magenta.underline.italic("C. Both A and B"),
        chalk.bold.magenta.underline.italic("D. List<string>"),
    ],
  }
]);

// make switch case for quiz 4

switch (quiz4.Qno_4) {
    case chalk.bold.magenta.underline.italic("C. Both A and B"):
        console.log(chalk.bold.green.underline.italic("\nQno_4: Correct Answer"));
        ++score;
        break;

    default:
        console.log(chalk.bold.red.underline.italic("\nIncorrect Answer"));
        console.log(chalk.bold.green.underline("\nCorrect Answer is 'C'. Both A and B'."));
        
        break;
}
let quiz5: {
    
    Qno_5: string;
    
  } = await inquirer.prompt([
  {
    name: "Qno_5",
    type: "list",
    message: chalk.bold.blue.underline("\nQ5. What is a union type in TypeScript?\n"),
    choices: [
        chalk.bold.magenta.underline.italic("A. A type that can be any value"),
        chalk.bold.magenta.underline.italic("B. A type that can be one of several types"),
        chalk.bold.magenta.underline.italic("C. A type that can be both a string and a number simultaneously"),
        chalk.bold.magenta.underline.italic("D. A type that can be an object"),
    ]
  }
]);

// make switch case for quiz 5

switch (quiz5.Qno_5) {
    case chalk.bold.magenta.underline.italic("B. A type that can be one of several types"):
        console.log(chalk.bold.green.underline.italic("\nQno_5: Correct Answer"));
        ++score;
        break;

    default:
        console.log(chalk.bold.red.underline.italic("\nIncorrect Answer"));
        console.log(chalk.bold.green.underline.italic("\nCorrect Answer is 'B'. A type that can be one of several types'."));
        
        break;
}


console.log(chalk.bold.magenta.underline.italic(`\nCongratulations! ${chalk.bold.green(name.user)} Your Total Score is : ${chalk.bold.green(score)} out of ${chalk.bold.green(5)}`));