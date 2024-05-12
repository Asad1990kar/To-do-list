#! /usr/bin/env node
import inquirer from "inquirer";
let toDoList = [];
let condition = true;
while (condition) {
    let listAdd = await inquirer.prompt([
        {
            name: "addToDo",
            type: "input",
            message: "What do you want to add in your To-Do list?",
        },
        {
            name: "confirm",
            type: "confirm",
            message: "Do you want to add more?",
            default: "true"
        }
    ]);
    toDoList.push(listAdd.addToDo);
    condition = listAdd.confirm;
    toDoList.forEach(list1 => console.log(list1));
}
;
