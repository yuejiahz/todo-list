import './style.css';
import { format, compareAsc } from 'date-fns'
import { title, buttonAddEventListener, addTaskInput} from './UI.js'

const taskContent = document.getElementById("task-content");
taskContent.append(title());

window.addEventListener('load', (event) => {
    buttonAddEventListener();
    console.log('page is fully loaded');
  });



