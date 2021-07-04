//import { compareAsc } from 'date-fns'

import { taskList, editTask, projectList } from "./layout"
import {deleteElementById} from "./DOMfunction"


class task {
  constructor(task, dueDate, status, project) {
    this.task = task
    this.date = dueDate
    this.status = status
    this.project = project
  }
}

const getTodayDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = String(today.getFullYear());
  return { dd, mm, yyyy };
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

      let newTask = new task(taskInput, dueDateInput, 'unchecked', project);
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
      taskList.layout();
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

const projectFunc = (()=> {
  function add(){
    const input = document.querySelector('#project-input').value;
    console.log(input);
    projectList(input);
    deleteElementById('project-bar');

  }
  function del(){
    deleteElementById('project-bar');

  }
  return {
    add,
    del
  }

})();
export { getTodayDate, taskFunc, projectFunc }