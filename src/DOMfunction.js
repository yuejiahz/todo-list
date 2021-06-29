import { createTask } from "./layout";

function editTask(event){
    const taskNum = document.querySelector(`#${event.target.id}`).getAttribute('data');
    createTask(taskNum);
}

function deleteElementbyEvent(event) {
    if (typeof input === 'object') {
        const element = document.getElementById(`${event.target.id}`).parentNode;
        element.remove();
    }
}

function deleteElementById(Id){
    if (typeof Id === 'string') {
        const elementID = document.getElementById(`${Id}`);
        if(elementID){
            elementID.remove();
        }
    }
}

function displayAddTaskBtn(statement) {
    const addTaskbtn = document.querySelector('#add-task-btn');
    if (statement) {
        addTaskbtn.style.display = "block"
    }
    else {
        addTaskbtn.style.display = "none";
    }
}

function displayTaskInputBar(statement){
    const taskInput = document.querySelector('#task-input-bar');
    if (statement) {
        taskInput.style.display = "block"
    }
    else {
        taskInput.style.display = "none";
    }
}

function addEventListenerById(Id,func){
    document.querySelector(`#${Id}`).addEventListener('click',func);
}

function addEventListenerByClass(className,func){
    const elements = Array.from(document.querySelectorAll(`.${className}`));
    elements.forEach((ele) => ele.addEventListener('click',func));
}

function removeEventListenerByClass(className,func){
    console.log(className);
    const elements = Array.from(document.querySelectorAll(`.${className}`));
    elements.forEach((ele)=>ele.removeEventListener('mousemove',func))
}

export{
      editTask,
      deleteElementById,
      deleteElementbyEvent, 
      displayAddTaskBtn,
      displayTaskInputBar, 
      addEventListenerById, 
      addEventListenerByClass,
      removeEventListenerByClass 
    }