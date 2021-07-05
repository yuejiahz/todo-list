import './style.css';
import { taskInput, taskList } from './taskLayout.js';
import { projectInput } from './projectLayout';
import { displayAddTaskBtn, deleteElementById } from './DOMfunction';
import { taskFunc } from './function';


const getTitle = (text) => {

    deleteElementById('title');
    const taskContent = document.querySelector('#task-content');
    const title = document.createElement('h3');
    title.id = 'title';
    title.innerHTML = `${text}`;
    taskContent.prepend(title);
}

const navInfo = (() => {
    var listTitleArray = ['home','today'];
    var navNum = [];

    function updateList(input){
        listTitleArray.push(input);
        console.log(listTitleArray);
    }
    function selectNav(event){
        let num = document.querySelector(`#${event.target.id}`).getAttribute('nav');
        navNum.push(num);
        console.log(navNum)

    }
    return {
        updateList,
        selectNav,
        list: listTitleArray,
        num: navNum
    }  
})();

const loadPage = (() => {  

const defaultTitle = () => {
   getTitle('Home');
   displayAddTaskBtn(false);
}

const addEventListener = () => {
    if(!!document){
        document.querySelector('#home').addEventListener('click',display.allTask);
        document.querySelector('#today').addEventListener('click',display.todayTask);
        document.querySelector('#add-project-btn').addEventListener('click',projectInput.layout);
        document.querySelector('#add-task-btn').addEventListener('click',taskInput.layout);
        } 
 }

defaultTitle();
addEventListener();
});

const display = (() => {

    function allTask (event) {
        getTitle('Home');
        navInfo.selectNav(event);
        taskList.layout();
        displayAddTaskBtn(false);
    }

    function todayTask (event) {
        getTitle('Today');
        navInfo.selectNav(event);
        taskList.layout();
        displayAddTaskBtn(true);
    }

    function taskByProject (event){
        const selectedProject = document.querySelector(`#${event.target.id}`);
        navInfo.selectNav(event);
        getTitle(selectedProject.textContent);
        taskList.layout();
        displayAddTaskBtn(true);
    }

return{
    allTask,
    todayTask,
    taskByProject
}
})();

window.addEventListener('DOMContentLoaded',loadPage);

export{ display, navInfo }







