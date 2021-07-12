import {
    createTaskInput,
    createTaskList, 
    deleteElementByEvent,
    createEditTaskInput,
    displayAddTaskBtn
} from './taskLayout';
import { task, project, selection, taskArray,  } from './function';
import { createProjectInput, createProjectList, createEditProjectInput } from './projectLayout';
import { setTitle } from './index';

function insertTaskInputBar() {
    createTaskInput.layout();
}

function addTask() {
    task.add();
    task.printList();
    displayAddTaskBtn(true);
}

function deleteTask(event) {
    const ID = task.getTaskIDFromEvent(event);
    const index = task.getArrayIndexFromTaskID(ID);
    task.clear(index);
    deleteElementByEvent(event);
}

function editTask(event) {
    const ID = task.getTaskIDFromEvent(event);
    const index = task.getArrayIndexFromTaskID(ID);
    createEditTaskInput.layout(ID);
    selection.task.index = index;
}

function cancelEditTask(event) {
    deleteElementByEvent(event);
    createEditTaskInput.displayAllHiddenTask();
}
function addEditedTask() {
    task.set(selection.task.index, selection.project.ID);
    task.printList();
}

function checkboxToggle() {
    const ID= this.getAttribute('data');
    const taskText = document.querySelector(`#task-${ID}`).childNodes[1];
    const index = task.getArrayIndexFromTaskID(ID);
    if (this.checked) {
        taskText.classList.add('strike');
        taskArray[index].status = 'checked';
    }
    else {
        taskText.classList.remove('strike');
        taskArray[index].status = 'unchecked';
    }
}

function insertProjectInputBar() {
    createProjectInput.layout();
}
function addProject(){
    createTaskList.deletePreviousDOM();
    createTaskList.createListContainer();
    project.add();
    createProjectList.deletePreviousDOM();
    project.printList();
}
function deleteProject(){
    project.clear();
    createProjectList.deletePreviousDOM();
    project.printList();
    //set empty title after last project deleted
    if(selection.nav.index == 2 && selection.navArray.length == 2){
        setTitle('');
    } else{
        //select next project's list after delete a project
        selection.navItem(selection.nav.index);
    }

}
function editProject(){
    createEditProjectInput.layout();
}
function addEditedProject(){
    project.set();
    selection.navItem(selection.nav.index);
    createProjectList.deletePreviousDOM();
    project.printList();
}
function cancelEditProject(event){
    deleteElementByEvent(event);
}

export {
    insertTaskInputBar,
    addTask,
    deleteTask,
    editTask,
    addEditedTask,
    cancelEditTask,
    checkboxToggle,
    insertProjectInputBar,
    addProject,
    deleteProject,
    editProject,
    addEditedProject,
    cancelEditProject
}