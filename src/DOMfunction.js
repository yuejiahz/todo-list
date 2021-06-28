
function editTask(){
console.log('hrllo');
}

function deleteElement(input) {
    //remove element by event
    if (typeof input === 'object') {
        const element = document.getElementById(`${input.target.id}`).parentNode;
        element.remove();
    }

    //remove element by id
    if (typeof input === 'string') {
            const elementID = document.getElementById(`${input}`);
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
    document.querySelector(`#${Id}`).addEventListener('click',func)
}

function addEventListenerByClass(className,func){
    const elements = Array.from(document.querySelectorAll(`.${className}`));
    elements.forEach((ele) => ele.addEventListener('click',func));
}

export{
      editTask,
      deleteElement, 
      displayAddTaskBtn,
      displayTaskInputBar, 
      addEventListenerById, 
      addEventListenerByClass 
    }