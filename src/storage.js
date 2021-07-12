import { taskArray, projectArray, navArray } from './function';

const storage = () => {
   function saveTaskList(){
      localStorage.setItem('task',JSON.stringify(taskArray));
   }
   function set(name, array){
   }
   function getTaskList(){
      var getStoredTask = localStorage.getItem('task');
   
   }
   function clear(){
      console.log('her')
      localStorage.clear();
   }
   return {
      getTaskList, saveTaskList, clear
   }

}

export { storage }