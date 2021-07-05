import './style.css';
import { taskInput, taskList } from './taskLayout.js';
import { projectInput, editProject } from './projectLayout';
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
    var selectedProject = [];
    var navNum, projectName;

    function updateList(input){
        listTitleArray.push(input);
    }

    function editList(input){
       listTitleArray[navNum] = input;
    }

    function _selectNav(event){
        navNum = document.querySelector(`#${event.target.id}`).getAttribute('nav');
    }
    function getCurrentProject(event){
        _selectNav(event);
        projectName = listTitleArray[navNum];
        selectedProject.push(projectName);
    }

    return {
        updateList,
        editList,
        getCurrentProject,
        selectedProject
    }  
})();

const loadPage = (() => {  

const defaultTitle = () => {
   getTitle('Home');
   displayAddTaskBtn(false);
}

const addEventListener = () => {
    if(!!document){
        document.querySelector('#home').addEventListener('click', display.allTask);
        document.querySelector('#today').addEventListener('click', display.todayTask);
        document.querySelector('#add-project-btn').addEventListener('click', projectInput.layout);
        document.querySelector('#add-task-btn').addEventListener('click', taskInput.layout);
        } 
 }

defaultTitle();
addEventListener();
});

const display = (() => {

    function allTask (event) {
        getTitle('Home');
        navInfo.getCurrentProject(event);
        taskList.layout();
        displayAddTaskBtn(false);
    }

    function todayTask (event) {
        getTitle('Today');
        navInfo.getCurrentProject(event);
        taskList.layout();
        displayAddTaskBtn(true);
    }

    function taskByProject (event){
        const selectedProject = document.querySelector(`#${event.target.id}`);
        navInfo.getCurrentProject(event);
        getTitle(selectedProject.textContent);
        taskList.layout();
        editProject.addEditBtn();
        displayAddTaskBtn(true);
        
    }

return{
    allTask,
    todayTask,
    taskByProject
}
})();

window.addEventListener('DOMContentLoaded',loadPage);

export{ display, navInfo, getTitle }







