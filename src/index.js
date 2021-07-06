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
    var list = ['home','today'];
    var selectedProject = [];
    var selectedNavItem = [];
    var navNum = []; 
    var proNum = [];
    var lastSelectedNum; 

    function updateList(input){
        list.push(input);
    }

    function editList(input){
       list[lastSelectedNum] = input;
    }
    function delList(){
        list.splice(lastSelectedNum,1);
    }

    function select(event){
        let num = document.querySelector(`#${event.target.id}`).getAttribute('nav');
        navNum.push(num);
        lastSelectedNum = navNum[navNum.length-1];
        _getCurrentNavItem(lastSelectedNum);
        _getCurrentProject(lastSelectedNum);
        getProjectIndex(lastSelectedNum);
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
        proNum.push(num);
        }
    }
    function _getCurrentNavItem(num){
        let navItem = list[num];
        selectedNavItem.push(navItem);
    }

    return {
        updateList,
        editList,
        delList,
        select,
        project: selectedProject,
        nav: selectedNavItem,
        list: list,
        projectIndexArr: proNum
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
        navInfo.select(event);
        //taskFunc.selectedList = taskFunc.list.filter((list)=> list));
        taskList.layout();
        displayAddTaskBtn(false);
    }

    function todayTask (event) {
        getTitle('Today');
        navInfo.select(event);
        taskList.layout();
        displayAddTaskBtn(true);
    }

    function taskByNavItem (event){
        const selectedNavItem = document.querySelector(`#${event.target.id}`);
        navInfo.select(event);
        getTitle(selectedNavItem.textContent);
        taskList.layout();
        editProject.addEditBtn();
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







