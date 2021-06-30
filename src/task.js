//import { compareAsc } from 'date-fns'
import { deleteElement } from './layout'

let taskList =[];

class task {
  constructor(task, dueDate, status) {
    this.task = task
    this.date = dueDate
    this.status=status
  }
}

const addTask = () => {
  let taskInput = document.getElementById('task-input').value;
  let dueDateInput = document.getElementById('dueDate').value;
  if (!dueDateInput) {
    let today =getTodayDate();
    dueDateInput=today.yyyy+'/'+(today.mm)+'/'+today.dd;
  } else {
    dueDateInput=dueDateInput.replace(/-/g,'/');
  }
  let newTask = new task(taskInput, dueDateInput,'unchecked');
  taskList.push(newTask);

  return taskList;
  
}

const getTodayDate = () => {
  var today = new Date();
  var dd=String(today.getDate()).padStart(2,'0');
  var mm=String(today.getMonth()+1).padStart(2,'0');
  var yyyy = String(today.getFullYear());
  return { dd, mm, yyyy };
}

export { addTask, getTodayDate }