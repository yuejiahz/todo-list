import { format, compareAsc } from 'date-fns'

let taskList =[];

class task {
  constructor(task, dueDate, status) {
    this.task = task
    this.date = dueDate
    this.status=status
  }
}

const addTaskInput = () => {
  let taskInput = document.getElementById('task').value;
  let dueDateInput = document.getElementById('dueDate').value;
  if (!dueDateInput) {
    let today =getTodayDate();
    dueDateInput=format(new Date(today.yyyy, today.mm-1, today.dd), 'dd/MM/yyyy');
  } else {
    dueDateInput=format(new Date(dueDateInput.slice(0, 4), dueDateInput.slice(5, 7)-1, dueDateInput.slice(8, 10)), 'dd/MM/yyyy');
  }

  let newTask = new task(taskInput, dueDateInput,'unchecked');
  taskList.push(newTask);
  //console.log(taskList);
  return taskList;
    //console.log(format(new Date(today.yyyy, today.dd, today.mm), 'MM/dd/yyyy'));
  //  console.log(format(new Date(dueDate.slice(0,4), dueDate.slice(5,7), dueDate.slice(8,10)), 'MM/dd/yyyy'));

  // const dates = [
  //   new Date(1995, 6, 2),
  //   new Date(1987, 1, 11),
  //   new Date(1989, 6, 10),
  // ]
  // dates.sort(compareAsc)
  //=> [
  //   Wed Feb 11 1987 00:00:00,
  //   Mon Jul 10 1989 00:00:00,
  //   Sun Jul 02 1995 00:00:00
  // ]
  //console.log(dates);
}

const getTodayDate = () => {
  var today = new Date();
  var dd=today.getDate();
  var mm=today.getMonth()+1;
  var yyyy = today.getFullYear();
  return { dd, mm, yyyy };
}

export { addTaskInput, getTodayDate }