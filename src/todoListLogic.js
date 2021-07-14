import {
    createTaskInput,
    createTaskList,
    deleteElementByEvent,
    createEditTaskInput,
    displayAddTaskBtn
} from './taskLayout';
import { task, project, selection, navArray } from './function';
import { createProjectInput, createProjectList, createEditProjectInput } from './projectLayout';
import { setTitle } from './index';
import { storage } from "./storage";

function insertTaskInputBar() {
    createTaskInput.layout();
}

function addTask() {
    task.add();
    task.printList();
    displayAddTaskBtn(true);
    storage.saveTaskList();
}

function deleteTask(event) {
    const ID = task.getID(event);
    task.clear(task.getIndex(ID));
    storage.saveTaskList();
    deleteElementByEvent(event);
    
}

function editTask(event) {
    const ID = task.getID(event);
    createEditTaskInput.layout(ID);
    selection.task.index = task.getIndex(ID);
    storage.saveTaskList();
}

function cancelEditTask(event) {
    deleteElementByEvent(event);
    createEditTaskInput.displayAllHiddenTask();
}
function addEditedTask() {
    task.set(selection.task.index, selection.project.ID);
    task.printList();
    storage.saveTaskList();

}

function checkboxToggle() {
    const ID = this.getAttribute('data');
    const taskText = document.querySelector(`#task-${ID}`).childNodes[1];
    const index = task.getIndex(ID);
    if (this.checked) {
        taskText.classList.add('strike');
        task.getTask().status = 'checked';
    }
    else {
        taskText.classList.remove('strike');
        task.getTask().status = 'unchecked';
    }
    storage.saveTaskList();
}

function insertProjectInputBar() {
    createProjectInput.layout();
}
function addProject() {
    createTaskList.deletePreviousDOM()
    createTaskList.createListContainer();
    project.add()
    project.printList();
    storage.saveProjectList();
    storage.saveNavList();
    selection.navItem(navArray.length - 1);
}
function deleteProject() {
    project.clear()
    project.printList();
    storage.saveNavList();
    storage.saveProjectList();
    storage.saveTaskList();

    //set empty title after last project is deleted
    if (selection.nav.index == 2 && navArray.length == 2) {
        setTitle('');
    } else {
        //select next project's list after delete a project
        selection.navItem(selection.nav.index);
    }
}
function editProject() {
    createEditProjectInput.layout();
}
function addEditedProject() {
    project.set()
    project.printList();
    selection.navItem(selection.nav.index);
    storage.saveProjectList();
    storage.saveTaskList();
}
function cancelEditProject(event) {
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