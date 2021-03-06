import './style.css';
import { Task, tasks } from './taskClass.js';
import addTasks from './sort.js';
import { getTasks, saveTasks } from './localStorage.js';
import checkbox from './checkBox.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasks();
  checkbox();
});

const inputSelector = document.querySelector('#inputTask');

inputSelector.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const task = new Task(inputSelector.value);
    tasks.push(task);
    addTasks();
    saveTasks();
    inputSelector.value = '';
  }
});
