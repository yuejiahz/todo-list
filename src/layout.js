import { addTask } from "./task"
import {
    editTask,
    deleteElementById,
    deleteElementbyEvent,
    displayAddTaskBtn,
    displayTaskInputBar,
    addEventListenerById,
    addEventListenerByClass,
    removeEventListenerByClass
} from './DOMfunction.js'


const getTitle = (text) => {

    function createTitle() {
        const taskContent = document.querySelector('#task-content');
        const title = document.createElement('h3');
        title.id = 'title';
        title.innerHTML = `${text}`;
        taskContent.prepend(title);
    }

    deleteElementById('title');
    createTitle();
}

const createTask = (taskNum) => {

    function layout() {
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

        //insert task input bar before selected edit list
        if (typeof taskNum === 'string') {
           const task = document.querySelector(`#task-${taskNum}`);
           const selectTaskList = document.querySelector('#task-list');
           //display hidden task
           selectTaskList.childNodes.forEach((list)=> list.style.display="flex");      
        
           selectTaskList.insertBefore(taskBar, task);
           //hide edited task
           task.style.display = "none";

        } else {
            taskContent.append(taskBar);
        }
    }

    function addEventListener() {
        addEventListenerById('add-task-input-btn', taskList);
        addEventListenerById('cancel-task-input-btn', deleteElementbyEvent);
    }

    deleteElementById('task-input-bar');
    layout();
    addEventListener();
    displayAddTaskBtn(false);
}

const taskList = () => {

    let list = addTask();

    function layout() {
        const taskContent = document.querySelector('#task-content');
        const taskList = document.createElement('ul');
        taskList.id = "task-list";
        taskContent.appendChild(taskList);

        for (let i in list) {

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

            text.textContent = `${list[i].task}`;
            date.textContent = `${list[i].date}`;
            edit.textContent = "edit";
            del.textContent = "X";


            taskList.appendChild(task);
            task.appendChild(checkbox);
            task.appendChild(text);
            task.appendChild(date);
            task.appendChild(edit);
            task.appendChild(del);
        }
    }

    function addEventListener() {
        addEventListenerByClass('task-del-btn', deleteElementbyEvent);
        addEventListenerByClass('task-edit-btn', editTask);
    }

    deleteElementById('task-list');
    layout();
    addEventListener();
    displayAddTaskBtn(true);
    displayTaskInputBar(false);

    return {
        removeEventListener:function() {
            removeEventListenerByClass('task-del-btn', deleteElementbyEvent);
            removeEventListenerByClass('task-edit-btn', editTask);
        }
    }
}

const createProject = () => {
    console.log('create project')
}

export { getTitle, createTask, createProject }