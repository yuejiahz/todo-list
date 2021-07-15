# todo-list
[View demo](https://yuejiahz.github.io/todo-list/)

A todo list website to manage your daily task.

Home: to view all tasks in one list (Home).
Today: Quick access to create task list.
Projects: Create separate lists for different tasks.

Click on tabs to navigate different lists.
To edit project's name, click on the respective project's name on sidebar

Feature: 
- Check and uncheck task 
- Tasks without date input will register today's date automatically,
- local storage for inter-session usage
- sort task by date automatically
- reset button to clear local storage 

Javascript design pattern/concepts applied:
- Revealing modular pattern
- Single responsibility principle
- less coupling
- IIFE 

CSS3:
- grid
- flexbox

Used dependencies in webpack: 
- webpack
- webpack-cli
- css loader
- style-loader
- date-fns
