//import { compareAsc } from 'date-fns'

import { taskList, editTask } from "./layout";
import {deleteElementById} from "./DOMfunction"


class task {
  constructor(task, dueDate, status, listName) {
    this.task = task
    this.date = dueDate
    this.status = status
    this.listName = listName
  }
}

const taskFunc = (() => {

  var taskArray = [];

    function add() {
      let taskInput = document.getElementById('task-input').value;
      let dueDateInput = document.getElementById('dueDate').value;
      if (!dueDateInput) {
        let today = getTodayDate();
        dueDateInput = today.yyyy + '/' + (today.mm) + '/' + today.dd;
      } else {
        dueDateInput = dueDateInput.replace(/-/g, '/');
      }

      let newTask = new task(taskInput, dueDateInput, 'unchecked', 'today');
      taskArray.push(newTask);
      taskList.layout();
    }

    function update() {
      let taskInput = document.getElementById('task-input').value;
      let dueDateInput = document.getElementById('dueDate').value;
      dueDateInput = dueDateInput.replace(/-/g, '/');

      let selectedTaskArray = editTask.taskNum;
      let currentSelectionIndex = editTask.taskNum.length-1;
      let currentTaskNum = selectedTaskArray[currentSelectionIndex];

      taskArray[currentTaskNum].task = taskInput;
      taskArray[currentTaskNum].date = dueDateInput;
    }

    function del(event) {
      const taskNum = event.path[1].getAttribute('data');
      deleteElementById(`task-${taskNum}`);
      taskArray.splice(taskNum,1);
    }

  return {
    list: taskArray,
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

export { getTodayDate, taskFunc }