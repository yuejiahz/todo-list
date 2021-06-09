import './style.css';
import { today, addTask } from './today-list.js'

const taskContainer=document.querySelector('#task-container');

taskContainer.append(today());

console.log(taskContainer);
