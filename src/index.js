import './style.css';
//import { title, buttonAddEventListener } from './UI.js'
import { getTitle, createTask, createProject } from './layout.js'



const loadPage = (() => {

    const home = document.querySelector('#home');
    const today = document.querySelector('#today');
    const addProjectBtn = document.querySelector('#add-project-btn');
    const addTaskBtn = document.querySelector('#add-task-btn');

const defaultTitle = () => {
   getTitle('Home');
}

const addEventListener = () => {
   
    home.addEventListener('click',allTask);
    today.addEventListener('click',todayTask);
    addProjectBtn.addEventListener('click',createProject);
    addTaskBtn.addEventListener('click',createTask);
}

defaultTitle();
addEventListener();
});

window.addEventListener('DOMContentLoaded',loadPage);

function allTask(event){
    getTitle('Home');

}

function todayTask(event){
    getTitle('Today');
}







