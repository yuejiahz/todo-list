import { addTask, deleteTask, editTask, cancelEditTask, addEditedTask, checkboxToggle } from './todoListLogic';

const taskContent = document.querySelector('#task-content');

const createTaskInput = (() => {

    function _deletePreviousDOM() {
        deleteElementById('task-input-bar');
    }

    function layout() {
        _deletePreviousDOM();

        const taskBar = document.createElement('div');
        const input = document.createElement('input');
        const date = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        input.setAttribute('type', 'text');
        input.setAttribute('value', 'default task');
        date.setAttribute('type', 'text');

        taskBar.id = "task-input-bar";
        input.id = "task-input";
        date.id = "date";
        add.id = "add-task-input-btn";
        cancel.id = "cancel-task-input-btn";
        add.classList.add("task-btn");
        cancel.classList.add("task-btn");

        date.placeholder="MM/DD/YYYY";
        add.textContent = "Add";
        cancel.textContent = "X";

        date.setAttribute('onfocus',"(this.type='date')");
        date.setAttribute('onblur',"(this.type='text')");

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
            document.querySelector('#add-task-input-btn').addEventListener('click', addTask);
            document.querySelector('#cancel-task-input-btn').addEventListener('click', deleteElementByEvent);
        }
    }

    return {
        layout
    }
})();

const createTaskList = (() => {

    function deletePreviousDOM() {
        deleteElementById('task-list');
        deleteElementById('task-input-bar');
    }

    function createListContainer() {
        deletePreviousDOM();
        const taskBar = document.querySelector('#task-input-bar');
        const taskList = document.createElement('ul');
        taskList.id = "task-list";
        taskContent.insertBefore(taskList, taskBar);
    }
    function createTask(list) {
        const taskList = document.querySelector('#task-list');
        const task = document.createElement('li');
        const checkbox = document.createElement('input');
        const text = document.createElement('p');
        const date = document.createElement('p');
        const edit = document.createElement('button');
        const del = document.createElement('button');

        checkbox.setAttribute('type', 'checkbox');
        task.id = `task-${list.ID}`;
        edit.id = `task-edit-btn-${list.ID}`;
        del.id = `task-cancel-btn-${list.ID}`;

        task.setAttribute('data', `${list.ID}`);
        checkbox.setAttribute('data', `${list.ID}`);
        edit.setAttribute('data', `${list.ID}`);
        del.setAttribute('data', `${list.ID}`);

        taskList.classList.add('task');
        checkbox.classList.add("task-checkbox");
        text.classList.add('task-text');
        date.classList.add('task-date');
        edit.classList.add("task-edit-btn");
        del.classList.add("task-delete-btn");

        edit.classList.add('task-btn');
        del.classList.add('task-btn');

        text.textContent = `${list.text}`;
        date.textContent = `${list.date}`;
        edit.textContent = "edit";
        del.textContent = "X";

        // add checked effects to task 
        if (list.status === 'checked') {
            checkbox.checked = true;
            text.classList.add('strike');
        }

        taskList.appendChild(task);
        task.appendChild(checkbox);
        task.appendChild(text);
        task.appendChild(date);
        task.appendChild(edit);
        task.appendChild(del);

        _addEventListener();
        displayAddTaskBtn(true);
    }

    function _addEventListener() {

        if (!!document) {
            const del = Array.from(document.querySelectorAll('.task-delete-btn'));
            const edit = Array.from(document.querySelectorAll('.task-edit-btn'));
            const checkboxes = Array.from(document.querySelectorAll('.task-checkbox'));
            del.forEach((ele) => ele.addEventListener('click', deleteTask));
            edit.forEach((ele) => ele.addEventListener('click', editTask));
            checkboxes.forEach((ele) => ele.addEventListener('change', checkboxToggle));
        }
    }

    return {
        deletePreviousDOM,
        createListContainer,
        createTask
    }
})();


const createEditTaskInput = (() => {
    function _deletePreviousDOM() {
        deleteElementById('task-input-bar');
    }

    function layout(taskID) {
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

        const task = document.getElementById(`task-${taskID}`);
        const selectTaskList = document.querySelector('#task-list');
        //insert task input bar before selected edit list
        selectTaskList.insertBefore(taskBar, task);
        displayAllHiddenTask();
        //hide edited task
        task.style.display = "none";

        _previewTaskInfoInInputBar(taskID);
        _addEventListener();
        displayAddTaskBtn(false);
    }

    function _previewTaskInfoInInputBar(taskNum) {
        const task = document.querySelector(`#task-${taskNum}`);
        const taskBar = document.querySelector("#task-input-bar");
        //taskbar text input shows task text
        taskBar.childNodes[0].value = task.childNodes[1].textContent;
        const y = task.childNodes[2].textContent.slice(0, 2);
        const m = task.childNodes[2].textContent.slice(3, 5);
        const d = task.childNodes[2].textContent.slice(6, 10);
        //taskbar date input shows date text
        taskBar.childNodes[1].value = d + '-' + m + '-' + y;
    }
    function displayAllHiddenTask() {
        const selectTaskList = document.querySelector('#task-list');
        selectTaskList.childNodes.forEach((list) => list.style.display = "flex");
    }

    function _addEventListener() {
        if (!!document) {
            document.querySelector('#add-task-input-btn').addEventListener('click', addEditedTask);
            document.querySelector('#cancel-task-input-btn').addEventListener('click', cancelEditTask);
        }
    }

    return {
        layout,
        displayAllHiddenTask
    }

})();

function deleteElementById(Id) {
    if (typeof Id === 'string') {
        const elementID = document.getElementById(`${Id}`);
        if (elementID) {
            elementID.remove();
        }
    }
}

function deleteElementByEvent(event) {
    if (typeof event === 'object') {
        const elementID = document.getElementById(`${event.target.id}`).parentNode;
        if (elementID) {
            elementID.remove();
        }
    }
    if (event.target.id === 'cancel-task-input-btn') {
        displayAddTaskBtn(true);
    }
}

function displayAddTaskBtn(statement) {
    const addTaskbtn = document.querySelector('#add-task-btn');
    if (statement) {
        addTaskbtn.style.display = "block"
    }
    else if (!statement) {
        addTaskbtn.style.display = "none";
    }
}

export {
    createTaskInput, createTaskList, createEditTaskInput, displayAddTaskBtn,
    deleteElementByEvent, deleteElementById
}