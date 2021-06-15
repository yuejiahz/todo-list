import { addTaskInput } from './task.js'


let isTaskInput =false;

const title = () =>{
    const todayContainer=document.createElement('div');
    const todayTitle=document.createElement('h3');
    todayTitle.textContent="Today";
    todayContainer.appendChild(todayTitle);
    return todayContainer;
}


const appendTaskInputLayout=()=>{
    //select task content div
    const taskContent=document.querySelector('#task-content');
    //create task input container
    const taskBar=document.createElement('div');
    taskBar.classList.add('task-bar');
    //insert html for task input
    taskBar.innerHTML=`
        <label for="task"> </label>
        <input type="text" id="task" name="task" value="default" placeholder="Task" >
            <label for="date"></label>
            <input type="date" id="dueDate" name="dueDate">
        <button id="add-task-input-btn" class="task-btn"> Add </button>
        <button id="cancel-task-input-btn" class="task-btn"> X </button>
     `;    
    taskContent.appendChild(taskBar);

    const addTask=document.querySelector('#add-task-btn')
    //addTask.style.display="none";
    const cancelTaskInputBtn=document.querySelector('#cancel-task-input-btn');
    cancelTaskInputBtn.addEventListener('click', removeDOM(event));

    isTaskInput=true;
    //buttonAddEventListener(isTaskInput);
}

const appendTask=()=>{
    const taskContent=document.querySelector('#task-content');
    const addTask=document.querySelector('#add-task-btn')
    addTask.style.display="block";
    /*  <input type="checkbox" id="task1" name="task1" value="wash dish">
    <label for="wash dish"> wash dish</label><br> */
}
const remove=()=>{
    const taskBar=document.getElementsByClassName('task-bar');
    taskBar.remove();
    console.log(taskBar);
}
const removeDOM = (event) => {
    console.log(event.target.id);
    const DOM = document.getElementById(`${event.target.id}`).parentNode;
    console.log(DOM);
}

function buttonAddEventListener(isTaskInput){
    const addTaskBtn=document.querySelector('#add-task-btn');
    const addTaskInputBtn=document.querySelector('#add-task-input-btn');
    const cancelTaskInputBtn=document.querySelector('#cancel-task-input-btn');

    console.log(isTaskInput);
   // while(!isTaskInput){
    addTaskBtn.addEventListener('click', appendTaskInputLayout);
    
    if(!!isTaskInput) {
    addTaskBtn.removeEventListener('click', appendTaskInputLayout);
    addTaskInputBtn.addEventListener('click', addTaskInput());
    isTaskInput=false;
    } 
}

export{ title, buttonAddEventListener }