import { addTaskInput } from './task.js'

let hasTaskInput = false;
let hasTaskList = false;

const title = () => {
    const titleContainer = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = "Today";
    title.id = "title";
    title.classList.add = "h3-title";
    titleContainer.appendChild(title);
    return titleContainer;
}

const appendTaskInputLayout = (task) => {

    //select task content div
    const taskContent = document.querySelector('#task-content');
    //create task input container
    const taskBar = document.createElement('div');
    taskBar.id = "task-input-bar";
    //insert html for task input
    taskBar.innerHTML = `
        <label for="task-input"> </label>
        <input type="text" id="task-input" name="task-input" value="default" placeholder="Task" >
        <label for="date"></label>
        <input type="date" id="dueDate" name="dueDate">
        <button id="add-task-input-btn" class="task-btn"> Add </button>
        <button id="cancel-task-input-btn" class="task-btn"> X </button>
     `;

    //remove previous task input bar
    const selectTaskInputBar = document.querySelector('#task-input-bar');
    if (selectTaskInputBar) {
        removeDOM('task-input');
    }
    //Identify add task button or edit button 
    const DOMList = Array.from(task.target.classList);
    for (let classSelector of DOMList) {
        if (classSelector.includes('add-btn')) {
            taskContent.appendChild(taskBar);
        }
        if (classSelector.includes('task-edit-btn')) {
            const select = document.querySelector(`#${task.target.id}`).parentNode;
            const listNum = (task.target.id).substr(14, 3);
            const li = document.getElementsByTagName('LI');
            console.log(li.length);
            console.log(listNum);

            for(let k=listNum;k<=li.length;k++){
            removeDOM(`task-text-${k}`);
            // const y=document.createElement('p');
            // y.textContent='hshs';
            // taskContent.appendChild(y);
            appendTask(editTaskNum);
            }
            taskContent.appendChild(taskBar);
        }
    }
    //hide add task button
    document.querySelector('#add-task-btn').style.display = "none";

    //add event listener to task input buttons (add, x)
    buttonAddEventListener(hasTaskInput = true, hasTaskList = false);
}

const appendTask = (editTaskNum) => {

    const taskContent = document.querySelector('#task-content');

    //remove previous task list 
    const selectOneTask = document.querySelector('#task-0');
    if (selectOneTask) {
        removeDOM('task-0');
    }

    //get task list array
    let taskList = addTaskInput();

    //create task list 
    const taskListLayout = document.createElement('ul');
    taskListLayout.id = "task-list";

    for (let i in taskList) {
        const task = document.createElement('li');
        task.id = `task-${[i]}`;
        task.classList.add = "tasks";

        task.innerHTML = `
            <label for="task-checkbox"></label>
            <input type="checkbox" id="task-check-box-${[i]}" class="task-checkbox" name="task-checkbox" value=" ${taskList[i].task}  ${taskList[i].date}">
           
            <p id="task-text-${[i]}" class="task-text task-item"> ${taskList[i].task}</p>
            <p id="task-date-${[i]}" class="task-date task-item"> ${taskList[i].date}</p>
        
            <button id="task-edit-btn-${[i]}" class="task-edit-btn task-item task-btn"> Edit </button>
            <button id="task-delete-btn-${[i]}" class="task-delete-btn task-item task-btn"> X </button>
            `;
        taskListLayout.appendChild(task);
    }

    taskContent.appendChild(taskListLayout);

    buttonAddEventListener(hasTaskInput = false, hasTaskList = true, taskList.length);

    //display add task button
    document.querySelector('#add-task-btn').style.display = "block";
    removeDOM(event);
}

function buttonAddEventListener(hasTaskInput, hasTaskList, listLength) {

    const idToAddEventListener = (id, func) => {
        document.querySelector(`#${id}`).addEventListener('click', func);
    }

    if (!hasTaskInput) {
        idToAddEventListener('add-task-btn', appendTaskInputLayout);
    }
    if (hasTaskInput) {
        idToAddEventListener('add-task-input-btn', appendTask);
        idToAddEventListener('cancel-task-input-btn', removeDOM);
        hasTaskInput = false;
    }

    if (hasTaskList) {
        for (let j = 0; j < listLength; j++) {
            let list = document.getElementsByTagName("LI");

            //add event listener to delete button
            list.item(j).children[5].addEventListener('click', removeDOM);
            //add event listener to edit button
            list.item(j).children[4].addEventListener('click', appendTaskInputLayout);
        }
        hasTaskList = false;

    }

}

const removeDOM = (event) => {
    //remove element by event
    if (typeof event === 'object') {
        const DOM = document.getElementById(`${event.target.id}`).parentNode;

        //display add task button and add event listener after task input
        if (event.target.id == 'add-task-input-btn' || event.target.id == 'cancel-task-input-btn') {
            document.querySelector('#add-task-btn').style.display = "block";
        }
        DOM.remove();
    }

    //remove element by element id
    if (typeof event === 'string') {
        const DOM = document.getElementById(event).parentNode;
        DOM.remove();
    }
}

const getId = (event) => {
    const a = document.querySelector(`#${event.target.id}`);
    console.log(a.parentNode.id);
    a.parentNode.style.display = "none";
    appendTaskInputLayout(a.parentNode.id);
}

window.addEventListener('load', buttonAddEventListener(hasTaskInput = false, hasTaskList = false, 0));

export { title, buttonAddEventListener }