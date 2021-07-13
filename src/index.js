import './style.css';
let tasks = [];
class Task{
  constructor(index,description,completed){
    this.index = index
    this.description = description
    this.completed = completed

  }
}
let task1 = new Task(1,"first task",false)
let task2 = new Task(2,"second task",false)
let task3 = new Task(3,"third task",true)
let task4 = new Task(4,"forth task",true)
tasks.push(task1,task2,task3,task4)
