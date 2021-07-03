import { createTask } from "./layout";


function deleteElementbyEvent(event) {
    if (typeof event === 'object') {
        const element = document.getElementById(`${event.target.id}`).parentNode;
        element.remove();
    }
    if (event.target.id === 'cancel-task-input-btn'){
        displayAddTaskBtn(true);
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
    if(taskInput){
        if (statement) {
            taskInput.style.display = "flex"
        }
        else {
            taskInput.style.display = "none";
        }
    }
}

function addEventListenerById(Id,func){
    if(!!document){
    document.querySelector(`#${Id}`).addEventListener('click',func);
    }
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
     
      deleteElementById,
      deleteElementbyEvent, 
      displayAddTaskBtn,
      displayTaskInputBar, 
      addEventListenerById, 
      addEventListenerByClass,
      removeEventListenerByClass 
    }