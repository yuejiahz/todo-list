import { taskFunc, projectFunc } from "./task"
import {
    deleteElementById,
    deleteElementByEvent,
    displayAddTaskBtn,
    addEventListenerById,
    addEventListenerByClass,
    removeEventListenerByClass
} from './DOMfunction.js'


const getTitle = (text) => {

    deleteElementById('title');
    const taskContent = document.querySelector('#task-content');
    const title = document.createElement('h3');
    title.id = 'title';
    title.innerHTML = `${text}`;
    taskContent.prepend(title);
}

const taskInput = (() => {

    function _deletePreviousDOM(){
        deleteElementById('task-input-bar');
    }

    function layout(event) {
       _deletePreviousDOM();

        const taskContent = document.querySelector('#task-content');
        const taskBar = document.createElement('div');
        const input = document.createElement('input');
        const date = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        input.setAttribute('type', 'text');
        input.setAttribute('value', 'default task');
        date.setAttribute('type', 'date');

        taskBar.id = "task-input-bar";
        input.id = "task-input";
        date.id = "dueDate";
        add.id = "add-task-input-btn";
        cancel.id = "cancel-task-input-btn";
        add.classList.add("task-btn");
        cancel.classList.add("task-btn");

        add.textContent = "Add";
        cancel.textContent = "X";

        taskBar.appendChild(input);
        taskBar.appendChild(date);
        taskBar.appendChild(add);
        taskBar.appendChild(cancel);
        taskContent.append(taskBar);

        _addEventListener();
        displayAddTaskBtn(false);
    }

    function _addEventListener() {
        addEventListenerById('add-task-input-btn', taskFunc.add);
        addEventListenerById('cancel-task-input-btn', deleteElementByEvent);
    }

    return {
        layout
    }
})();

const taskList = (() => {

    function layout() {

        _deletePreviousDOM();
        const taskContent = document.querySelector('#task-content');
        const taskList = document.createElement('ul');
        const taskBar = document.querySelector('#task-input-bar');

        taskList.id = "task-list";
        taskContent.insertBefore(taskList, taskBar);

        for (let i in taskFunc.list) {
            const task = document.createElement('li');
            const checkbox = document.createElement('input');
            const text = document.createElement('p');
            const date = document.createElement('p');
            const edit = document.createElement('button');
            const del = document.createElement('button');

            checkbox.setAttribute('type', 'checkbox');

            task.id = `task-${[i]}`;
            checkbox.id = `task-checkbox-${i}`;
            text.id = `task-text-${i}`;
            date.id = `task-date-${i}`;
            edit.id = `task-edit-btn-${i}`;
            del.id = `task-delete-btn-${i}`;

            task.setAttribute('data', `${i}`)
            checkbox.setAttribute('data', `${i}`)
            text.setAttribute('data', `${i}`)
            date.setAttribute('data', `${i}`)
            edit.setAttribute('data', `${i}`)
            del.setAttribute('data', `${i}`)

            checkbox.classList.add("task-checkbox");
            text.classList.add("task-text");
            date.classList.add("task-date");
            edit.classList.add("task-edit-btn");
            del.classList.add("task-delete-btn");

            task.classList.add = "tasks";
            text.classList.add('task-item');
            date.classList.add('task-item');
            edit.classList.add('task-item');
            del.classList.add('task-item');

            edit.classList.add('task-btn');
            del.classList.add('task-btn');

            edit.classList.add('task-edit-btn');
            del.classList.add('task-del-btn');

            text.textContent = `${taskFunc.list[i].task}`;
            date.textContent = `${taskFunc.list[i].date}`;
            edit.textContent = "edit";
            del.textContent = "X";

            taskList.appendChild(task);
            task.appendChild(checkbox);
            task.appendChild(text);
            task.appendChild(date);
            task.appendChild(edit);
            task.appendChild(del);

            _addEventListener();
            displayAddTaskBtn(true);
        }
    }

    function _deletePreviousDOM() {
        deleteElementById('task-list');
        deleteElementById('task-input-bar');
    }

    function _addEventListener() {
        addEventListenerByClass('task-del-btn', taskFunc.del);
        addEventListenerByClass('task-edit-btn', editTask.layout);
    }
    return {
       layout
    }
})();


const editTask = (() => {

    let taskNumArray =[];

    function _deletePreviousDOM(){
        deleteElementById('task-input-bar');
    }

    function layout (event) {
        _deletePreviousDOM();

        const taskBar = document.createElement('div');
        const input = document.createElement('input');
        const date = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        input.setAttribute('type', 'text');
        input.setAttribute('value', 'default task');
        date.setAttribute('type', 'date');

        taskBar.id = "task-input-bar";
        input.id = "task-input";
        date.id = "dueDate";
        add.id = "add-task-input-btn";
        cancel.id = "cancel-task-input-btn";
        add.classList.add("task-btn");
        cancel.classList.add("task-btn");

        add.textContent = "Add";
        cancel.textContent = "X";

        taskBar.appendChild(input);
        taskBar.appendChild(date);
        taskBar.appendChild(add);
        taskBar.appendChild(cancel);
        taskBar.style.display='flex';

        const taskNum = document.querySelector(`#${event.target.id}`).getAttribute('data');
        const task = document.querySelector(`#task-${taskNum}`);
        const selectTaskList = document.querySelector('#task-list');
        //insert task input bar before selected edit list
        selectTaskList.insertBefore(taskBar, task);
        //display hidden task
        selectTaskList.childNodes.forEach((list) => list.style.display = "flex");
        //hide edited task
        task.style.display = "none";
        _previewTaskInfoInInputBar(taskNum);
        _addEventListener();
        getSelectedTask(taskNum);
        displayAddTaskBtn(false);

    }

    const getSelectedTask = (taskNum) => {
        taskNumArray.push(taskNum);
        return taskNumArray;
    }

    function _previewTaskInfoInInputBar(taskNum){
        const task = document.querySelector(`#task-${taskNum}`);
        const taskBar = document.querySelector("#task-input-bar");
        taskBar.childNodes[0].value = task.childNodes[1].textContent;
        const y = task.childNodes[2].textContent.slice(0, 4);
        const m = task.childNodes[2].textContent.slice(5, 7);
        const d = task.childNodes[2].textContent.slice(8, 10);
        taskBar.childNodes[1].value = y + '-' + m + '-' + d;
    }

    function _addEventListener() {
         addEventListenerById('add-task-input-btn', taskFunc.update);
         addEventListenerById('cancel-task-input-btn', taskFunc.del);
    }

return{
    layout,
    taskNum:taskNumArray
}

})();


const projectInput = (() => {
    function _deletePreviousDOM(){
        deleteElementById('project-bar');
    }
    function layout(){
        _deletePreviousDOM();
        const projectContent =  document.querySelector('#project-content');
        const addProjectBtn = document.querySelector('#add-project-btn');
        
        const  projectBar =  document.createElement('div');
        const input =  document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        projectBar.id="project-bar";
        input.id = "project-input";
        add.id = "add-project-input-btn";
        cancel.id = "cancel-project-input-btn";

        input.setAttribute('type', 'text');
        input.setAttribute('value', 'Default project');

        add.textContent = "Add";
        cancel.textContent = "Cancel";

        projectBar.style.display="flex";
        projectContent.appendChild(projectBar);
        projectBar.appendChild(input);
        projectBar.appendChild(add);
        projectBar.appendChild(cancel);
        _addEventListener();
    }
    function _addEventListener(){
        addEventListenerById('add-project-input-btn',projectFunc.add);
        addEventListenerById('cancel-project-input-btn',projectFunc.del);
    }

    return {
        layout
    }
})();

const projectList = ((projectName) => {
    const projectContent =  document.querySelector('#project-content');
    const project = document.createElement('div');
    const del = document.createElement('button');

    project.id="project"

    project.textContent = projectName;
    projectContent.append(project);

});

export { getTitle, taskInput, taskList, editTask, projectInput, projectList }