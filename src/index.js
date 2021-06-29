import './style.css';
//import { title, buttonAddEventListener } from './UI.js'
import { getTitle, createTask, createProject } from './layout.js'
import { addEventListenerById } from './DOMfunction.js'


const loadPage = (() => {  

const defaultTitle = () => {
   getTitle('Home');
}

const addEventListener = () => {
    addEventListenerById('home',allTask);
    addEventListenerById('today',todayTask);
    addEventListenerById('add-project-btn',createProject);
    addEventListenerById('add-task-btn',createTask);
}

defaultTitle();
addEventListener();
});

function allTask(event){
    getTitle('Home');
    function h(){
        console.log('h');
    }
    return {
        h
    }
}
const p= allTask();
p.h();
function todayTask(event){
    getTitle('Today');
}

window.addEventListener('DOMContentLoaded',loadPage);







