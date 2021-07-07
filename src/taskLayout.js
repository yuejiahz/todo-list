import { taskFunc } from "./function"

import {
    deleteElementById,
    deleteElementByEvent,
    displayAddTaskBtn
} from './DOMfunction.js'

const taskInput = (() => {

    function _deletePreviousDOM() {
        deleteElementById('task-input-bar');
    }

    function layout() {
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
        if (!!document) {
            document.querySelector('#add-task-input-btn').addEventListener('click', taskFunc.add);
            document.querySelector('#cancel-task-input-btn').addEventListener('click', deleteElementByEvent);
        }
    }

    return {
        layout
    }
})();

const taskList = (() => {

    function _deletePreviousDOM() {
        deleteElementById('task-list');
        deleteElementById('task-input-bar');
    }

    function filterByListName(listName){
        return listName == `${listName}`;
    }

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
            edit.id = `task-edit-btn-${[i]}`;
            del.id = `task-cancel-btn-${[i]}`;

            task.setAttribute('data', `${i}`);
            checkbox.setAttribute('data', `${i}`);

            edit.setAttribute('data', `${i}`);
            del.setAttribute('data', `${i}`);

            taskList.classList.add('task');
            checkbox.classList.add("task-checkbox");
            text.classList.add('task-text');
            date.classList.add('task-date');
            edit.classList.add("task-edit-btn");
            del.classList.add("task-delete-btn");

            edit.classList.add('task-btn');
            del.classList.add('task-btn');

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

    function _addEventListener() {

        if(!!document){
            const del = Array.from(document.querySelectorAll('.task-delete-btn'));
            const edit = Array.from(document.querySelectorAll('.task-edit-btn'));
            const checkboxes = Array.from(document.querySelectorAll('.task-checkbox'));
            del.forEach((ele)=> ele.addEventListener('click',taskFunc.del));
            edit.forEach((ele)=> ele.addEventListener('click',editTask.layout));
            checkboxes.forEach((ele)=> ele.addEventListener('change',checkboxToggle));
        }
    }

    function checkboxToggle(){
        const taskNum= this.getAttribute('data');
        const taskText = document.querySelector(`#task-${taskNum}`).childNodes[1];
        if(this.checked){
            taskText.classList.add('strike');
        } 
        else {
            taskText.classList.remove('strike');
        }
    }
    return {
        layout,
        filterByListName
    }
})();


const editTask = (() => {

    let taskNumArray = [];

    function _deletePreviousDOM() {
        deleteElementById('task-input-bar');
    }

    function layout(event) {
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
        taskBar.style.display = 'flex';

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
        getSelectedTaskNum(taskNum);
        displayAddTaskBtn(false);
    }

    const getSelectedTaskNum = (taskNum) => {
        taskNumArray.push(taskNum);
        return taskNumArray;
    }

    function _previewTaskInfoInInputBar(taskNum) {
        const task = document.querySelector(`#task-${taskNum}`);
        const taskBar = document.querySelector("#task-input-bar");
        taskBar.childNodes[0].value = task.childNodes[1].textContent;
        const y = task.childNodes[2].textContent.slice(0, 4);
        const m = task.childNodes[2].textContent.slice(5, 7);
        const d = task.childNodes[2].textContent.slice(8, 10);
        taskBar.childNodes[1].value = y + '-' + m + '-' + d;
    }

    function _addEventListener() {
        if (!!document) {
            document.querySelector('#add-task-input-btn').addEventListener('click', taskFunc.update);
            document.querySelector('#cancel-task-input-btn').addEventListener('click', taskFunc.del);
        }
    }

    return {
        layout,
        taskNum: taskNumArray
    }

})();

export { taskInput, taskList, editTask }