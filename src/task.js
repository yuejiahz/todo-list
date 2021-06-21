//import { compareAsc } from 'date-fns'

let taskList =[];

class task {
  constructor(task, dueDate, status) {
    this.task = task
    this.date = dueDate
    this.status=status
  }
}

const addTaskInput = () => {
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
  var dd=today.getDate();
  var mm=today.getMonth()+1;
  var yyyy = today.getFullYear();
  return { dd, mm, yyyy };
}

export { addTaskInput, getTodayDate }