import { taskArray, projectArray, navArray } from './function';
import { loadPage } from './index';
const storage = (() => {

   function set(name, array){
      localStorage.setItem(`${name}`, JSON.stringify(array));

   }

   function get(name) {
      return JSON.parse(localStorage.getItem(`${name}`));
   }

   function saveTaskList() {
      localStorage.setItem('task', JSON.stringify(taskArray));
   }
   function saveProjectList(){
      localStorage.setItem('project', JSON.stringify(projectArray));
   }

   function saveNavList(){
      localStorage.setItem('nav', JSON.stringify(navArray));
   }


   function getTaskList() {
      return JSON.parse(localStorage.getItem('task'));
   }

   function getProjectList() {
      return JSON.parse(localStorage.getItem('project'));
   }
   function getNavList() {
      return JSON.parse(localStorage.getItem('nav'));
   }
   function clear() {
      navArray.splice(2,navArray.length);
      projectArray.splice(0,projectArray.length);
      taskArray.splice(0,taskArray.length); 
      window.localStorage.clear();
      loadPage();
   }
   return {
      set, get,
      saveTaskList, saveProjectList, saveNavList, 
      getTaskList, getProjectList, getNavList, clear
   }

})()

export { storage }