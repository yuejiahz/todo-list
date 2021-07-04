import './style.css';
//import { title, buttonAddEventListener } from './UI.js'
import { getTitle, taskInput, projectInput, taskList } from './layout.js'
import { addEventListenerById } from './DOMfunction.js'


const loadPage = (() => {  

const defaultTitle = () => {
   getTitle('Home');
}

const addEventListener = () => {
    addEventListenerById('home',allTask);
    addEventListenerById('today',todayTask);
    addEventListenerById('add-project-btn',projectInput);
    addEventListenerById('add-task-btn',taskInput.layout);
}

defaultTitle();
addEventListener();
});

const allTask=(event)=>{
    getTitle('Home');
}

function todayTask(event){
    getTitle('Today');
}

window.addEventListener('DOMContentLoaded',loadPage);







