import { createTaskList } from "./taskLayout";
import { createProjectList } from "./projectLayout";
import { setTitle } from "./index";
import { format } from "date-fns";

let taskArray = [{text:'clean room', date:'12 Sept 2019', listName:'Today', ID:927494, listID:223636, status:'unchecked'},
{text:'dentist appointment', date:'12 Mar 2021', listName:'appointment', ID:927494, listID:223636, status:'checked'},
{text:'wash dish', date:'2 Apr 2020', listName:'Today', ID:927494, listID:223636, status:'unchecked'},
{text:'coding project', date:'6 Jul 2021', listName:'personal project', ID:927494, listID:223636, status:'checked'},
{text:'chemistry assignment', date:'8 May 2021', listName:'homework', ID:927494, listID:223636, status:'unchecked'}];
let projectArray = [];
let navArray = [{ name :'Home', ID:0 }, 
                {name:'Today', ID:1 }];


const selection = (() => {
let task = { ID: '', index:'' };
let project = { ID:'', index :''};
let nav = { ID:'', index :''};

  const getNavName = () => {
    return navArray[nav.index].name;
  }
  const getProjectName = () => {
    return projectArray[project.index].name;
  }
  const setNavName = (name)=> {
    navArray[nav.index].name = name;
  }
  const setProjectName = (name)=> {
    projectArray[project.index].name = name;
  }
  const getID = ()=> {
    return navArray[nav.index].ID;
  }
  const getIndex = (event) => {
    const ID = event.path[0].getAttribute('nav');
    nav.ID = ID;
    project.ID = ID;
    
      for(let i=0;i<navArray.length;i++){
        if(navArray[i].ID == ID){
          nav.index = i; 
          return i;
        }
    }
    for(let j=0;j<projectArray.length;j++){
      if(projectArray[j].ID == ID){
        project.index = j; 
      }
  }
  }
  const navItem = (input) => {
    let selectedName;
    if(typeof input == 'string'){
      selectedName = input;
    } else {
      selectedName = navArray[input].name;
      nav.index = input;
      nav.ID = navArray[input].ID;
        if(input > 1){
        project.index = input - 2;
        }
      project.ID = nav.ID;
    }
    setTitle(selectedName);
  }
           
return {
  task, nav, project, navItem, getIndex, getID, navArray, getNavName, 
  getProjectName, setNavName, setProjectName
}
})();

const taskFactory = () => {

  const factoryFunc = (text, date, listName, ID, listID, status ) => {
    return { text, date, listName, ID, listID, status }
  }

  const add = () => {
    const text = document.getElementById('task-input').value;
    const date = getDate();
    const ID = Math.floor(Math.random()*1000000); 
    const listName = selection.getNavName();
    const listID = selection.getID();
    const status = 'unchecked';
    const newTask = factoryFunc(text, date, listName, ID, listID, status);
    taskArray.push(newTask);
  }

  const getID = (index) => {
    return  taskArray[index].ID;
  }
  const setText = (index, text) => {
    return  taskArray[index].text= text;
  }
  const setDate = (index, date) => {
    return  taskArray[index].date = date;
  }
  const set = (index) => {
    const text = document.getElementById('task-input').value;
    const date = getDate();
    setText(index, text); 
    setDate(index, date); 
  }
  const clear = (index) => {
    taskArray.splice(index, 1);
  }
  const getTaskIDFromEvent = (event) => event.path[1].getAttribute('data');
  const getArrayIndexFromTaskID = (inputID) => {
    for(let i=0;i< taskArray.length;i++){
      if(getID(i) == inputID){
        selection.task.index = i;
       return i;
      }
     }
  }

  const printList = () => {
    createTaskList.deletePreviousDOM();
    createTaskList.createListContainer();

      const result = taskArray.filter((task)=>{
        return task.listID == selection.nav.ID
    });
      result.forEach((task)=>{
        createTaskList.createTask(task);
    });

  }
  const printAllList = () => {
    createTaskList.deletePreviousDOM();
    createTaskList.createListContainer();
      taskArray.forEach((task)=>{
        createTaskList.createTask(task);
    });

  }

  return { add, set, clear, getTaskIDFromEvent, 
    getArrayIndexFromTaskID, printList, printAllList }
};

const task = taskFactory();

function getDate(){
    var date = document.getElementById('dueDate').value;
    if(!date){
      date = format(new Date(),'dd/MM/yyyy');
    } else{
      date = format(new Date(date),'dd/MM/yyyy');
    }
    return date;
}

const projectFactory = () => {
  const factoryFunc = (name, ID, taskList) => {
    return { name, ID, taskList }
  }
  const add = () => {
    const name = document.getElementById('project-input').value;
    const ID = Math.floor(Math.random()*1000000); 
    const newProject = factoryFunc( name, ID);
    projectArray.push(newProject);
    navArray.push(newProject);
    //display new added project
    selection.navItem(selection.navArray.length-1);
  }

  const getID = (index) => {
    return projectArray[index].ID;
  }
  const set = () => {
    const name = document.getElementById('project-input').value;
    taskArray.forEach((task)=>{
      if( task.listName == selection.getProjectName()) {
        task.listName = name;
      }
    });
     selection.setProjectName(name);
     selection.setNavName(name);
  }
  const clear = () => {
    projectArray.splice(selection.project.index, 1);
    navArray.splice(selection.nav.index,1);
    //eliminate tasks of the deleted project
     const result = taskArray.filter((task)=> task.listID !== selection.nav.ID);
     taskArray= result;
  }
  const printList = () => {
    projectArray.forEach((project)=> {
      createProjectList.layout(project);
  });
  }
  const getProjectIDFromEvent = (event) => event.path[1].getAttribute('data');
  const getArrayIndexFromProjectID = (inputID) => {
    for(let i=0;i<projectArray.length;i++){
      if(getID(i) == inputID){
       return i;
      }
     }
  }

  return {
    add, set, clear, getProjectIDFromEvent, 
     getArrayIndexFromProjectID, printList }
}

const project = projectFactory();

export { task, project, taskArray, projectArray, selection }