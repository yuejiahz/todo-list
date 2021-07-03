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
    addEventListenerById('add-task-btn',createTask.layout);
}

defaultTitle();
addEventListener();
});

const allTask=((event)=>{
    getTitle('Home');
    let g=[23,5,6,3,3,56,7,47,54]

    function j(){
        console.log('dsj');
    }
    function h(){
       
        console.log( g.indexOf(6));
    }
    return {
        h
    }
})
const p= allTask();
p.h();

function todayTask(event){
    getTitle('Today');
}

window.addEventListener('DOMContentLoaded',loadPage);







