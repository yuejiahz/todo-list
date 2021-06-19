import { addTaskInput } from './task.js'

let hasTaskInput =false;
let hasTaskList =false;



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
    //hide add task button
    document.querySelector('#add-task-btn').style.display="none";
    //add event listener to task input buttons (add, x)
    buttonAddEventListener(hasTaskInput=true, hasTaskList=false);
}


const appendTask=(event)=>{
    const taskContent=document.querySelector('#task-content');

    //remove previous task list and sort button
    const selectOneTask=document.querySelector('#task-0');
    if(selectOneTask) {
        removeDOM('task-0');
    }
    
    //get task list array
    let taskList=addTaskInput();

    //create task list 
    const taskListLayout=document.createElement('ul');
    taskListLayout.id="task-list";


    for(let i in taskList){
        const task=document.createElement('li');
        task.id=`task-${[i]}`;
        task.classList.add="all-task";

        task.innerHTML=`
            <label for="task-checkbox"></label>
            <input type="checkbox" id="task-check-box-${[i]}" class="task-checkbox" name="task-checkbox" value=" ${taskList[i].task}  ${taskList[i].date}">
           
            <p id="task-text-${[i]}" class="task-text task-item"> ${taskList[i].task}</p>
            <p id="task-date-${[i]}" class="task-date task-item"> ${taskList[i].date}</p>
        
            <button id="task-edit-btn-${[i]}" class="task-edit-btn task-item task-btn"> Edit </button>
            <button id="task-delete-btn-${[i]}" class="task-delete-btn task-item task-btn"> X </button>
            `;
            buttonAddEventListener(hasTaskInput=false,hasTaskList=true,i);
          
            const d=document.querySelector(`#task-delete-btn-${[i]}`);
            // const d=document.querySelectorAll(`.task-delete-btn`);
             //console.log(d);
        //    task.addEventListener('load',function()=>{
        //     console.log('haoot');
        //    });
        console.log(task.children[5]);

            //addEventListener('click',removeDOM);
            taskListLayout.appendChild(task);

            function hey(){
                console.log('hello there');
            }
        }
   
    taskContent.appendChild(taskListLayout);
    
    //display add task button
    document.querySelector('#add-task-btn').style.display="block";
    removeDOM(event);

}


function buttonAddEventListener(hasTaskInput,hasTaskList,i){

    const idToAddEventListener = (id,func) => {
        document.querySelector(`#${id}`).addEventListener('click',func);
    }

    //  idToAddEventListener : { 
    //      function (id,func)=>{
    //     document.querySelector(`#${id}`).addEventListener('click',func);
    //     }
    
    if(!hasTaskInput){
        idToAddEventListener('add-task-btn',appendTaskInputLayout);
    } 
    if(hasTaskInput) {
        idToAddEventListener('add-task-input-btn',appendTask);
        idToAddEventListener('cancel-task-input-btn',removeDOM);
        hasTaskInput=false;
    } 
    if(hasTaskList){
        console.log(i);
        // window.onload()=init;
        // function init(){
        // idToAddEventListener(`task-delete-btn-${i}`,removeDOM); 
        // }
        //idToAddEventListener(`task-list`,removeDOM);
        //idToAddEventListener(`task-edit-${i}`,loaded);

      
       function updateHTML(elm,){

       }
        // const taskLists=document.querySelector(`button[id="task-delete-btn-${i}"]`);        
        // console.log(taskLists);
      
        hasTaskList=false;
    }

}

const removeDOM = (event) => {
    //remove element by event
    if(typeof event === 'object'){
        const DOM = document.getElementById(`${event.target.id}`).parentNode;
       
         //display add task button and add event listener after task input
         if(event.target.id=='add-task-input-btn'||event.target.id=='cancel-task-input-btn'){
            document.querySelector('#add-task-btn').style.display="block";
        }
     DOM.remove();
    }

    //remove element by element id
    if(typeof event === 'string'){
        const DOM = document.getElementById(event).parentNode;
        DOM.remove();
    }
    
}



export{ title, buttonAddEventListener }