import { taskList, editTask } from "./taskLayout";
import { deleteElementById} from "./DOMfunction";
import { projectList } from "./projectLayout";
import { getTitle, navInfo } from "./index";

class task {
  constructor(task, dueDate, listName) {
    this.task = task
    this.date = dueDate
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
  var selectedTaskArray = [];

    function add() {
      let taskInput = document.getElementById('task-input').value;
      let dueDateInput = document.getElementById('dueDate').value;
      let listName = navInfo.nav[navInfo.nav.length-1];

        if (!dueDateInput) {
          let today = getTodayDate();
          dueDateInput = today.yyyy + '/' + (today.mm) + '/' + today.dd;
        } else {
          dueDateInput = dueDateInput.replace(/-/g, '/');
        }

      let newTask = new task(taskInput, dueDateInput, listName);
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
    selectedList : selectedTaskArray,
    add,
    update,
    del
  }

})();

const projectFunc = (()=> {

  var projectArray=[];

    function add(){
      const input = document.querySelector('#project-input').value;
      projectArray.push(input);
      navInfo.updateList(input);
      projectList.layout();
    }

    function update(){
      const input = document.querySelector('#project-input').value;
      navInfo.editList(input);
      let lastIndex = navInfo.projectIndexArr[navInfo.projectIndexArr.length-1];
      projectArray[lastIndex]=input;
      getTitle(input);
      deleteElementById('project-edit-btn');
      projectList.layout();
    }

    function del(){
      let lastIndex = navInfo.projectIndexArr[navInfo.projectIndexArr.length-1];
      projectArray.splice(lastIndex,1);
      navInfo.delList();
      //
      projectList.layout();
    }

  return {
    list: projectArray,
    add,
    update,
    del
  }

})();
export { getTodayDate, taskFunc, projectFunc }