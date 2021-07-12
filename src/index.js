import './style.css';
import { createTaskList, deleteElementById, displayAddTaskBtn} from './taskLayout';
import {  createEditProjectInput } from './projectLayout';
import { task, selection } from './function';
import  {storage}  from './storage';
import { insertProjectInputBar, insertTaskInputBar } from './todoListLogic';

const setTitle = (text) => {
    deleteElementById('title');
    const titleContainer = document.querySelector('#title-container');
    const title = document.createElement('h3');
    title.id='title';
    title.innerHTML = `${text}`;
    titleContainer.appendChild(title);
}

const loadPage = (() => {  

const defaultDisplay = () => {
    display.todayTask();
}

const addEventListener = () => {
        document.querySelector('#home').addEventListener('click', display.allTask);
        document.querySelector('#today').addEventListener('click', display.todayTask);
        document.querySelector('#add-project-btn').addEventListener('click', insertProjectInputBar);
        document.querySelector('#add-task-btn').addEventListener('click', insertTaskInputBar);
        document.querySelector('#reset').addEventListener('click', storage.clear);
 }

defaultDisplay();
addEventListener();
});

const display = (() => {

    function allTask (event) {
        deleteElementById('project-bar');
        selection.navItem(0);
        createTaskList.deletePreviousDOM();
        createTaskList.createListContainer();
        task.printAllList();
        displayAddTaskBtn(false);
    }

    function todayTask (event) {
        deleteElementById('project-bar');
        displayAddTaskBtn(true);
        selection.navItem(1);
        createTaskList.deletePreviousDOM();
        createTaskList.createListContainer();
        task.printList();
    }

    function taskByNavItem (event){
        displayAddTaskBtn(true);
        createEditProjectInput.addBtn();
        const index = selection.getIndex(event);
        selection.navItem(index);
        createEditProjectInput.addBtn();
        createTaskList.deletePreviousDOM();
        createTaskList.createListContainer();
        task.printList();
    }

return{
    allTask,
    todayTask,
    taskByNavItem
}
})();


window.addEventListener('DOMContentLoaded',loadPage);

export{ display, setTitle }







