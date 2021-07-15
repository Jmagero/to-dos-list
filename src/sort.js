import { tasks } from './taskClass.js';
// eslint-disable-next-line import/no-cycle
import addTasks from './showTasks.js';
// eslint-disable-next-line import/no-cycle
import { saveTasks } from './localStorage.js';

export default () => {
  const draggables = document.querySelectorAll('.draggable');
  let dragged;
  draggables.forEach((e) => {
    e.addEventListener('dragstart', (event) => {
      dragged = event.target;
    });

    e.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    e.addEventListener('drop', (event) => {
      event.preventDefault();

      for (let i = 0; i < event.target.classList.length; i += 1) {
        if (event.target.classList[i] === 'droppable') {
          const draggedIndex = tasks[dragged.children[0].children[0].children[0].id].index;
          const droppedIndex = tasks[e.children[0].children[0].children[0].id].index;
          const tempDescription = tasks[draggedIndex].description;
          const tempDescription2 = tasks[droppedIndex].description;
          const tempChecked = tasks[draggedIndex].completed;
          const tempChecked2 = tasks[droppedIndex].completed;
          tasks[draggedIndex].index = droppedIndex;
          tasks[droppedIndex].index = draggedIndex;
          tasks[droppedIndex].description = tempDescription;
          tasks[draggedIndex].description = tempDescription2;
          tasks[droppedIndex].completed = tempChecked;
          tasks[draggedIndex].completed = tempChecked2;
          addTasks();
          saveTasks();
        }
      }
    });
  });
};