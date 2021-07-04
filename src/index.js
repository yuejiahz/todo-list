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
    addEventListenerById('add-project-btn',projectInput.layout);
    addEventListenerById('add-task-btn',taskInput.layout);
}

defaultTitle();
addEventListener();
});

const allTask=(event)=>{
    getTitle('Home');
    taskList.layout();
}

function todayTask(event){
    getTitle('Today');
    taskList.layout();
}
function projectSelection(){

}
window.addEventListener('DOMContentLoaded',loadPage);







