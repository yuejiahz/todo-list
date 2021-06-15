import { format, compareAsc } from 'date-fns'

class task {
  constructor(task,date){
    this.task=task;
    this.date=date;
  }
}

const addTaskInput = ()=>{
  const task=document.getElementById('task').value;
  const dueDate=document.getElementById('dueDate').value;
  console.log('add button');
//  console.log(task);
//  console.log(dueDate);
 format(new Date(2014, 1, 11), 'MM/dd/yyyy')
//=> '02/11/2014'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
//console.log(dates);
}

const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var todayDate = mm + '/' + dd + '/' + yyyy;
    //console.log(todayDate);
}

    export { addTaskInput, getDate }