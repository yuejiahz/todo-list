import { addTaskInput } from './task.js'


let hasTaskInput =false;

const title = () =>{
    const titleContainer=document.createElement('div');
    const title=document.createElement('h3');
    title.textContent="Today";
    title.id="title";
    title.classList.add="h3-title";
    titleContainer.appendChild(title);
    return titleContainer;
}


const appendTaskInputLayout=()=>{
    //select task content div
    const taskContent=document.querySelector('#task-content');
    //create task input container
    const taskBar=document.createElement('div');
    taskBar.id="task-input-bar";;
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
    //hide + add task button
    document.querySelector('#add-task-btn').style.display="none";
    //add event listener to task input buttons (add, x)
    buttonAddEventListener(hasTaskInput=true);
}

function buttonAddEventListener(hasTaskInput){
    const addTaskBtn=document.querySelector('#add-task-btn');
    const addTaskInputBtn=document.querySelector('#add-task-input-btn');
    const cancelTaskInputBtn=document.querySelector('#cancel-task-input-btn');

    if(!hasTaskInput){
    addTaskBtn.addEventListener('click', appendTaskInputLayout);
    } 
    if(hasTaskInput) {
    addTaskBtn.removeEventListener('click', appendTaskInputLayout);
    addTaskInputBtn.addEventListener('click', appendTask);
    cancelTaskInputBtn.addEventListener('click', removeDOM);
    hasTaskInput=false;
    } 
}

const appendTask=(event)=>{
    const taskContent=document.querySelector('#task-content');

    //remove previous task list 
    const selectOneTask=document.querySelector('#one-task');
    if(selectOneTask) {
        removeDOM({target:{ id:'one-task'}});
    }
    
    //task list array
    let taskList=addTaskInput();

    //create task list
    const taskListLayout=document.createElement('ul');
    taskListLayout.id="task-list";

    for(var i=0;i<taskList.length;i++){
        const oneTask=document.createElement('li');
        oneTask.id="one-task";

        oneTask.innerHTML=`
            <label for="task-checkbox"></label>
            <input type="checkbox" id="task-checkbox" name="task-checkbox" value=" ${taskList[i].task}  ${taskList[i].date}">
            <p id="task-text"> ${taskList[i].task} </p>
            <p id="task-date"> ${taskList[i].date}</p>
            <button id="delete-task-list-btn" class="task-list-btn"> X </button>
            `;
        const tc=document.getElementById('task-checkbox');
        console.log(tc);
            taskListLayout.appendChild(oneTask);
        }

    taskContent.appendChild(taskListLayout);
    
    //display + add task button
    document.querySelector('#add-task-btn').style.display="block";
    removeDOM(event);

}

const removeDOM = (event) => {
    const DOM = document.getElementById(`${event.target.id}`).parentNode;
    DOM.remove();
    //add event listener to + add task button
    buttonAddEventListener(hasTaskInput=false);
    //display add task button
    document.querySelector('#add-task-btn').style.display="block";

}



export{ title, buttonAddEventListener }