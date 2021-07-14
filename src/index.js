import './style.css';
import {  deleteElementById, displayAddTaskBtn} from './taskLayout';
import {  createEditProjectInput } from './projectLayout';
import { task, selection, project } from './function';
import  { storage}  from './storage';
import { insertProjectInputBar, insertTaskInputBar } from './todoListLogic';

db.collection('task').get().then((snapshot)=>{
    snapshot.docs.forEach(element => {
        console.log(element.data());
    });
})
console.log('koko');

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

    function allTask () {
        deleteElementById('project-bar');
        selection.navItem(0);
        task.printList();
        displayAddTaskBtn(false);
    }

    function todayTask () {
        deleteElementById('project-bar');
        selection.navItem(1);
        task.printList();
        project.printList();
        displayAddTaskBtn(true);
    }

    function taskByNavItem (event){
        createEditProjectInput.addBtn();
        const index = selection.setIndex(event)
        selection.navItem(index);
        createEditProjectInput.addBtn();
        task.printList();
        displayAddTaskBtn(true);
    }

return{
    allTask,
    todayTask,
    taskByNavItem
}
})();


window.addEventListener('DOMContentLoaded',loadPage);

export{ display, setTitle, loadPage }







