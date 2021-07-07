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

const setTask = () =>  document.getElementById('task-input').value;
const getDate = () => document.getElementById('dueDate').value;
const getList = () => navInfo.nav[navInfo.nav.length-1];
const getTaskNum = (event) => event.path[1].getAttribute('data');

const taskFunc = (() => {

  var taskArray = [];
  var selectedTaskArray = [];

    function add() {
      let taskText = setTask();
      let date = getDate();
      let list = getList();

        if (!date) {
          let today = getTodayDate();
          date = today.yyyy + '/' + (today.mm) + '/' + today.dd;
        } else {
          date = date.replace(/-/g, '/');
        }

      let newTask = new task(taskText, date, list);
      taskArray.push(newTask);
      console.log(taskArray);
      taskList.layout();
    }

    function update() {
      let task = setTask();
      let date = getDate();

      date = date.replace(/-/g, '/');

      let index = editTask.taskNum[editTask.taskNum.length-1];

      taskArray[index].task = task;
      taskArray[index].date = date;
      taskList.layout();
    }

    function del(event) {
      const taskNum = getTaskNum(event);
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

  var displayProjectArr=[];
  const getInput = () => document.querySelector('#project-input').value;
  const getIndex = () => navInfo.projectIndexArr[navInfo.projectIndexArr.length-1];

    function add(){
      const input = getInput();
      displayProjectArr.push(input);
      navInfo.updateList(input);
      projectList.layout();
    }

    function update(){
      const input = getInput();
      navInfo.editList(input);
      let index = getIndex();
      displayProjectArr[index]=input;
      getTitle(input);
      deleteElementById('project-edit-btn');
      projectList.layout();
    }

    function del(){
      let index = getIndex();
      displayProjectArr.splice(index,1);
      navInfo.delList();
      // to include delete task of the same list 
      projectList.layout();
    }

  return {
    list: displayProjectArr,
    add,
    update,
    del
  }

})();
export { taskFunc, projectFunc }