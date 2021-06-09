const today = ()=>{
    const todayContainer=document.createElement('div');
    const todaytitle=document.createElement('h3');
    const addTaskBtn=document.createElement('button');
    const taskList=document.createElement('ul');
    addTaskBtn.addEventListener('click',addTask);

    todaytitle.textContent="Today";
    addTaskBtn.textContent="+ Add Task";
    todayContainer.appendChild(todaytitle);
    todayContainer.appendChild(addTaskBtn);
    return todayContainer;
}

const addTask = ()=>{
    console.log('task btn');
    
}

export{ today, addTask }