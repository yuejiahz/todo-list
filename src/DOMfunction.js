

function deleteElementById(Id){
    if (typeof Id === 'string') {
        const elementID = document.getElementById(`${Id}`);
        if(elementID){
            elementID.remove();
        }
    }
}

function deleteElementByEvent(event){
    if (typeof event === 'object') {
        const elementID = document.getElementById(`${event.target.id}`).parentNode;
        if(elementID){
            elementID.remove();
        }
    }
    if(event.target.id === 'cancel-task-input-btn'){
        displayAddTaskBtn(true);
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
    const elements = Array.from(document.querySelectorAll(`.${className}`));
    elements.forEach((ele)=>ele.removeEventListener('mousemove',func))
}

export{
      deleteElementById,
      deleteElementByEvent,
      displayAddTaskBtn,
      addEventListenerById, 
      addEventListenerByClass,
      removeEventListenerByClass 
    }