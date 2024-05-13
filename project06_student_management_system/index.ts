#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Define the student class
class Student{
    static counter = 10000;
    id: number;
    name: string;
    courses: string[];
    balance: number;

    constructor (name: string){
        this.id = Student.counter ++ ;
        this.name = name;
        this.courses = []; // Initialize an empty array for courses
        this.balance = 100;
    }
    // Method to enroll a student in a course
    enroll_course(course: string){
        this.courses.push(course);
    }

    // Method to view a student balance
    view_balance(){
        console.log(`\tBalance for '${chalk.magenta.underline.italic.bold(this.name)}' : $${chalk.green(this.balance)}`);
    }

    // Method to pay student fees
    pay_fees(amount: number){
        this.balance -= amount;
        console.log(`\t$${chalk.green(amount)} Fees paid successfully for ${chalk.underline.bold.italic.magenta(this.name)}`);
        console.log(`\tRemaining Balance : $${chalk.green(this.balance)}`);  
    }

    // Method to display student status
    show_status(){
        console.log(chalk.yellowBright.underline(`\n\tID : ${chalk.green(this.id)}`));
        console.log(chalk.yellowBright.underline(`\tName : ${chalk.underline.bold.italic.magenta(this.name)}`));
        console.log(chalk.yellowBright.underline(`\tCourses : ${chalk.underline.bold.italic.magenta(this.courses)}`));
        console.log(chalk.yellowBright.underline(`\tBalance : $${chalk.green(this.balance)}\n`));
    }
}

// Defining a Student_Manager class to manage students
class Student_Manager {
    students: Student[]

    constructor(){
        this.students = [];
    }

    // Method to add a new Student
    add_student(name: string){
       let student = new Student(name);
       this.students.push(student);
       console.log("-".repeat(75));
       console.log(`\t
       Student: '${chalk.magenta.bold.underline.italic(name)}' added successfully. Student ID: ${chalk.green(student.id)}`);
       console.log("-".repeat(75));
       
    }

    // Method to enroll a student in a course
    enroll_student(student_id: number, course: string){
       let student = this.find_student(student_id);
       if (student){
           student.enroll_course(course);
           console.log("-".repeat(75));
           console.log(`\t'${chalk.magenta.bold.italic.underline(student.name)}' enrolled in '${chalk.magenta.underline.italic.bold(course)}' successfully.`);
           console.log("-".repeat(75));
           
       }
    }

    // Method to view a student balance
    view_student_balance(student_id: number){
        let student = this.find_student(student_id);
        if (student){
            student.view_balance();
        } else {
        
            console.log(chalk.underline.bold.italic.red(`\tStudent not found. Please enter correct student ID`));
            
        }
    }

    // Method to pay student fees
    pay_student_fees(student_id: number, amount: number){
        let student = this.find_student(student_id);
        if (student){
            student.pay_fees(amount);
        } else {
            
            console.log(chalk.underline.italic.bold.magenta(`\tStudent not found. Please enter correct student ID`));
             
        }
    }

    // Method to display student status
    show_student_status(student_id: number){
        let student = this.find_student(student_id);
        if (student){
            student.show_status();
        }
    }

    // Method to find student by student_id
    find_student(student_id: number){
         return this.students.find(std => std.id === student_id);
    }
}

// Main Function to run the program
async function main(){
    console.log(chalk.yellowBright("*".repeat(75)));
    console.log(chalk.magenta.italic.bold.underline('\t\tWelcome to Student Management System'));
    console.log(chalk.yellowBright("*".repeat(75)));
    
   let student_manager = new Student_Manager();

   // While loop to keep program running
   while (true){
       let choice = await inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: chalk.yellowBright('Choose an option: '),
            choices: [
                'Add Student',
                'Enroll Student',
                'View Student Balance',
                'Pay Student Fees',
                'Show Student Status',
                'Exit'
            ]

        }

      ]);

    // Using Switch case to handle user choice
    switch(choice.choice){
        case 'Add Student':
        let name_input = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter Student Name: ',

            }
        ]);
        student_manager.add_student(name_input.name);
        break;

        case 'Enroll Student':
          let course_input = await inquirer.prompt([
            {
               name: 'student_id',
               type: 'number',
               message: 'Enter Student ID: ',  
            },
            {
                name: 'course',
                type: 'input',
                message: 'Enter Course Name: ',
            }
        ]);

        student_manager.enroll_student(course_input.student_id, course_input.course);
          break;
        
        case "View Student Balance":
            let balance_input = await inquirer.prompt([
                {
                    name: 'student_id',
                    type: 'number',
                    message: 'Enter Student ID: ',
                }
            ]);
            student_manager.view_student_balance(balance_input.student_id);
            break;
        case "Pay Student Fees":
            let fees_input = await inquirer.prompt([
                {
                    name: 'student_id',
                    type: 'number',
                    message: 'Enter Student ID: ',
                },
                {
                    name: 'amount',
                    type: 'number',
                    message: 'Enter the Amount to pay: '
                }
            ]);
            student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
            break;
        case "Show Student Status":
            let status_input = await inquirer.prompt([
                {
                    name: 'student_id',
                    type: 'number',
                    message: 'Enter Student ID: '
                }
            ]);
            student_manager.show_student_status(status_input.student_id);
            break;
        case "Exit":
            console.log("Exiting...");
            process.exit();
                          
            }
   }
}

// calling a main function
main();