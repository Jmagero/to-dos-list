import { tasks } from './taskClass.js';
// eslint-disable-next-line import/no-cycle
import addTasks from './showTasks.js';

const saveTasks = () => {
  localStorage.setItem('tasksKey', JSON.stringify(tasks));
};

const getTasks = () => {
  if (localStorage.getItem('tasksKey')) {
    const getTasks = JSON.parse(localStorage.getItem('tasksKey'));
    getTasks.forEach((t) => {
      tasks.push(t);
    });
    addTasks();
  }
};

export { getTasks, saveTasks };