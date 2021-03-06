import { createTaskList } from "./taskLayout";
import { createProjectList } from "./projectLayout";
import { setTitle } from "./index";
import { format } from "date-fns";
import { storage } from "./storage";

var taskArray = //storage.getTaskList() || //[];
[{ text: 'clean room', date: '12/09/2019', listName: 'Today', ID: 578598, listID: 1, status: 'unchecked' },
{ text: 'book hotel', date: '12/02/2021', listName: 'plan vacation', ID: 927494, listID: 274621, status: 'unchecked' },
{ text: 'decide travel date', date: '12/06/2021', listName: 'plan vacation', ID: 927234, listID: 274621, status: 'checked' },
{ text: 'practice leetcode', date: '02/01/2020', listName: 'Today', ID: 385734, listID: 1, status: 'checked' },
{ text: 'create weather app', date: '06/11/2021', listName: 'personal project', ID: 927234, listID: 246916, status: 'checked' },
{ text: 'buy cat food', date: '08/02/2021', listName: 'errands', ID: 245494, listID: 223636, status: 'unchecked' },
{ text: 'pay rent', date: '02/08/2021', listName: 'errands', ID: 243224, listID: 223636, status: 'unchecked' }];

let projectArray = //storage.getProjectList() || //[];
                                                [{name:'plan vacation', ID: 274621}, 
                                                {name:'personal project', ID:246916},
                                                {name:'errands', ID: 223636}];
let navArray = //storage.getNavList() || //[{ name: 'Home', ID:0 },{ name: 'Today', ID: 1 },];
                    [{ name: 'Home', ID:0 },
                     { name: 'Today', ID: 1 },
                     {name:'plan vacation', ID: 274621}, 
                     {name:'personal project', ID: 246916},
                     {name:'errands', ID: 223636}];

const selection = (() => {
  let task = { ID: '', index: '' };
  let project = { ID: '', index: '' };
  let nav = { ID: '', index: '' };

  const getNav = (index) => {
    return navArray[index];
  }
  const getCurrentProject = () => {
    return projectArray[project.index];
  }
  const getCurrentNav = () => {
    return navArray[nav.index];
  }
  const setProjectName = (name) => {
    projectArray[project.index].name = name;
  }
 const setNavName = (name) => {
  navArray[nav.index].name = name;
    
  }
  const setIndex = (event) => {
    const ID = event.path[0].getAttribute('nav');
    nav.ID = ID;
    project.ID = ID;

    for (let j = 0; j < projectArray.length; j++) {
      if (projectArray[j].ID == ID) {
        project.index = j;
      }
    }
    for (let i = 0; i < navArray.length; i++) {
      if (navArray[i].ID == ID) {
        nav.index = i;
      }
    }
    return nav.index;
  }
  const navItem = (index) => {
    let selectedName = getNav(index).name;
    nav.index = index;
    nav.ID = getNav(index).ID;
    if (index > 1) {
      project.index = index - 2;
    }
    project.ID = nav.ID;
    setTitle(selectedName);
  }

  return {
    task, nav, project, navItem, setIndex, getCurrentNav, getCurrentProject,
    setProjectName,setNavName
  }
})();

const taskFactory = (() => {

  const factoryFunc = (text, date, listName, ID, listID, status) => {
    return { text, date, listName, ID, listID, status }
  }

  function _getDate() {
    let date = document.getElementById('date').value;
    if (!date) {
      date = format(new Date(), 'MM/dd/yyyy');
    } else {
      date = format(new Date(date), 'MM/dd/yyyy');
    }
    return date;
  }

  const get = (index) => {
    return taskArray[index];
  }

  const add = () => {
    const text = document.getElementById('task-input').value;
    const date = _getDate();
    const ID = Math.floor(Math.random() * 1000000);
    const listName = selection.getCurrentNav().name;
    const listID = selection.getCurrentNav().ID;
    const status = 'unchecked';
    const newTask = factoryFunc(text, date, listName, ID, listID, status);
    taskArray.push(newTask);
  }

  const set = (index) => {
  const text = document.getElementById('task-input').value;
  const date = _getDate();
    get(index).text = text;
    get(index).date = date;
  }

  const clear = (index) => {
    taskArray.splice(index, 1);
  }

  const getID = (event) => event.path[1].getAttribute('data');
  const getIndex = (inputID) => {
    for (let i = 0; i < taskArray.length; i++) {
      if (get(i).ID == inputID) {
        selection.task.index = i;
      }
    }
    return selection.task.index;
  }

  const printList = (() => {
    createTaskList.deletePreviousDOM();
    createTaskList.createListContainer();

    if(selection.nav.index == 0){
      var array = taskArray;
    }
    else {
      var array =  taskArray.filter((task) =>  task.listID == selection.nav.ID)
    } 
    const sortedArr = array.sort((a,b) =>  new Date(a.date )> new Date(b.date)? 1 : -1 );
                      array.forEach((task) => createTaskList.createTask(task));
                     
  })

  return {
    add, set, clear, get, getID, getIndex, printList
  }
});

const task = taskFactory();

const projectFactory = (() => {

  const factoryFunc = (name, ID) => {
    return { name, ID }
  }

  const add = () => {
    const name = document.getElementById('project-input').value;
    const ID = Math.floor(Math.random() * 1000000);
    const newProject = factoryFunc(name, ID);
    projectArray.push(newProject);
    navArray.push(newProject);
  }

  const set = () => {
    const name = document.getElementById('project-input').value;
    taskArray.forEach((task) => {
      if (task.listName == selection.getCurrentProject().name) {
        task.listName = name;
      }
    });
    selection.setProjectName(name);
    selection.setNavName(name);
  }

  const clear = () => {
    projectArray.splice(selection.project.index, 1);
    navArray.splice(selection.nav.index, 1);
    //eliminate tasks of the deleted project
    const result = taskArray.filter((task) => task.listID !== selection.nav.ID);
    taskArray = result;
  }

  const printList = () => {
    createProjectList.deletePreviousDOM();
    projectArray.forEach((project) => {
      createProjectList.layout(project);
    });
  }

  return {
    add, set, clear, printList
  }
})

const project = projectFactory();

export { taskArray, projectArray, navArray, task, project, selection }