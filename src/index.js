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
    var list = ['Home','Today'];
    var selectedProject = [];
    var selectedNavItem = [];
    var navIndex = []; 
    var projectIndex = [];
    var lastNavIndex; 

    function updateList(input){
        list.push(input);
    }

    function editList(input){
       list[lastNavIndex] = input;
    }
    function delList(){
        list.splice(lastNavIndex,1);
    }

    function select(event){
        let num;
        if (typeof event == 'object'){
            num = document.querySelector(`#${event.target.id}`).getAttribute('nav');
        }
        else if (typeof event == 'string' ) {
             let searchIndex = list.indexOf(`${event}`);
             num = searchIndex;    
        }
        navIndex.push(num);
        lastNavIndex = navIndex[navIndex.length-1];
        _getCurrentNavItem(lastNavIndex);
        _getCurrentProject(lastNavIndex);
        getProjectIndex(lastNavIndex);
    }
    function _getCurrentProject(num){
        if(num > 1){
        let projectName = list[num];
        selectedProject.push(projectName);
        }
    }
    function getProjectIndex(num){
        if(num > 1){ 
        num=num-2;
        projectIndex.push(num);
        }
    }
    function _getCurrentNavItem(num){
        let navItem = list[num];
        selectedNavItem.push(navItem);
        getTitle(navItem);
        taskList.layout();
    }
    return {
        updateList,
        editList,
        delList,
        select,
        project: selectedProject,
        nav: selectedNavItem,
        list: list,
        projectIndexArr: projectIndex
    }  
})();

const loadPage = (() => {  

const defaultDisplay = () => {
   display.todayTask();
   navInfo.select('Today');
}

const addEventListener = () => {
        document.querySelector('#home').addEventListener('click', display.allTask);
        document.querySelector('#today').addEventListener('click', display.todayTask);
        document.querySelector('#add-project-btn').addEventListener('click', projectInput.layout);
        document.querySelector('#add-task-btn').addEventListener('click', taskInput.layout);
 }

defaultDisplay();
addEventListener();
});

const display = (() => {

    function allTask (event) {
        navInfo.select(event);
        displayAddTaskBtn(false);
    }

    function todayTask (event) {
        navInfo.select(event);
        displayAddTaskBtn(true);
    }

    function taskByNavItem (event){
        navInfo.select(event);
        editProject.addBtn();
        displayAddTaskBtn(true);
    }

return{
    allTask,
    todayTask,
    taskByNavItem
}
})();

window.addEventListener('DOMContentLoaded',loadPage);

export{ display, navInfo, getTitle }







