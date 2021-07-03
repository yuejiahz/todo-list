import { getTaskInput } from "./task"
import {
    deleteElementById,
    deleteElementbyEvent,
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

const createTask = (() => {

    function layout(event) {
        deleteElementById('task-input-bar');

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
        addEventListenerById('add-task-input-btn', taskList.add);
        addEventListenerById('cancel-task-input-btn', deleteElementbyEvent);
    }

    return {
        layout
    }
})();


const taskList = (() => {

    function add() {
        getTaskInput.add();
        _layout();
    }
    function update(taskNum) {
        getTaskInput.update(taskNum);
        _layout();
    }

    function _layout() {

        _deletePreviousDOM();
        const taskContent = document.querySelector('#task-content');
        const taskList = document.createElement('ul');
        const taskBar = document.querySelector('#task-input-bar');

        taskList.id = "task-list";
        taskContent.insertBefore(taskList, taskBar);

        for (let i in getTaskInput.list) {
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

            text.textContent = `${getTaskInput.list[i].task}`;
            date.textContent = `${getTaskInput.list[i].date}`;
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
        addEventListenerByClass('task-del-btn', deleteElementbyEvent);
        addEventListenerByClass('task-edit-btn', editTask.layout);
    }
    return {
        add,
        update
    }
})();


const editTask = (() => {

    function _deletePreviousDOM(){
        deleteElementById('task-input-bar');
    }

    function layout(event) {
        console.log(event);
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
        taskBar.style.display='flex';

        const taskNum = document.querySelector(`#${event.target.id}`).getAttribute('data');
        const task = document.querySelector(`#task-${taskNum}`);
        const selectTaskList = document.querySelector('#task-list');
        //display hidden task
        selectTaskList.childNodes.forEach((list) => list.style.display = "flex");
        //insert task input bar before selected edit list
        //selectTaskList.insertBefore(taskBar, task);
        //hide edited task
        task.style.display = "none";

        //preview task and date in task input bar 
        taskBar.childNodes[0].value = task.childNodes[1].textContent;
        const y = task.childNodes[2].textContent.slice(0, 4);
        const m = task.childNodes[2].textContent.slice(5, 7);
        const d = task.childNodes[2].textContent.slice(8, 10);
        taskBar.childNodes[1].value = y + '-' + m + '-' + d;
        _addEventListener();
        displayAddTaskBtn(false);
        taskList.update(taskNum);
    }

    function _addEventListener() {
        addEventListenerById('add-task-input-btn', taskList.update);
        addEventListenerById('cancel-task-input-btn', deleteElementbyEvent);
    }
   

return{
    layout
}

})();


const createProject = () => {
    console.log('create project')
}

export { getTitle, createTask, createProject }