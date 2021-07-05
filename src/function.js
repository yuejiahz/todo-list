import { taskList, editTask } from "./taskLayout";
import { deleteElementById} from "./DOMfunction";
import { projectList } from "./projectLayout";
import { getTitle, navInfo } from "./index";

class task {
  constructor(task, dueDate, status, listNum, listName) {
    this.task = task
    this.date = dueDate
    this.status = status
    this.listNum = listNum
    this.listName = listName
  }
}

const getTodayDate = (() => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = String(today.getFullYear());
  return { dd, mm, yyyy };
})

const taskFunc = (() => {

  var taskArray = [];

    function add() {
      let taskInput = document.getElementById('task-input').value;
      let dueDateInput = document.getElementById('dueDate').value;
      let list = document.getElementById('title').textContent;

        if (!dueDateInput) {
          let today = getTodayDate();
          dueDateInput = today.yyyy + '/' + (today.mm) + '/' + today.dd;
        } else {
          dueDateInput = dueDateInput.replace(/-/g, '/');
        }

      let newTask = new task(taskInput, dueDateInput, 'unchecked', list);
      taskArray.push(newTask);
      console.log(taskArray);
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

  let projectArray=[];

    function add(){
      const input = document.querySelector('#project-input').value;
      projectArray.push(input);
      navInfo.updateList(input);
      projectList.layout();
    }

    function update(){
      const input = document.querySelector('#project-input').value;
      
      let navIndex = navInfo.index;
      let projectIndex = navIndex-2;
      projectArray[projectIndex] = input;
      navInfo.editList(input);
      getTitle(input);

      projectList.layout();
      deleteElementById('project-edit-btn');
    }

    function del(){
      deleteElementById('project-bar');
    }

  return {
    list: projectArray,
    add,
    update,
    del
  }

})();
export { getTodayDate, taskFunc, projectFunc }