//import { compareAsc } from 'date-fns'


class task {
  constructor(task, dueDate, status,listName) {
    this.task = task
    this.date = dueDate
    this.status = status
    this.listName = listName
  }
}

const getTaskInput = (() => {
  var taskArray = [];
  

  function add(){
    let taskInput = document.getElementById('task-input').value;
    let dueDateInput = document.getElementById('dueDate').value;
      if (!dueDateInput) {
        let today = getTodayDate();
        dueDateInput = today.yyyy + '/' + (today.mm) + '/' + today.dd;
      } else {
        dueDateInput = dueDateInput.replace(/-/g, '/');
      }

      let newTask = new task(taskInput, dueDateInput, 'unchecked','today');    
      taskArray.push(newTask);

    }

    function update(taskNum) {
      let taskInput = document.getElementById('task-input').value;
      let dueDateInput = document.getElementById('dueDate').value;
      dueDateInput = dueDateInput.replace(/-/g, '/');
      console.log(taskNum);
      console.log(taskArray);
      taskArray[`${taskNum}`].task = taskInput;
      taskArray[`${taskNum}`].date = dueDateInput;
      console.log(taskArray);
    }

    function del(taskNum){
      console.log(taskNum);
    }
  
  return {
    list:taskArray,
    add,
    update,
    del
  }
})();


const getTodayDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = String(today.getFullYear());
  return { dd, mm, yyyy };
}

export { getTaskInput , getTodayDate }