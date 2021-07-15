import { getTasks, saveTasks } from './localstorage.js';
import { tasks } from './taskClass.js';

export default () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  //console.log(checkboxes);
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      if (checkboxes[i].checked) {
        const index = checkboxes[i].id;
        tasks[index].completed = true;
        saveTasks();
      } else {
        const index = checkboxes[i].id;
        tasks[index].completed = false;
        saveTasks();
      }
    });
  }
};