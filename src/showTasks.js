import { tasks } from './taskClass.js';
// eslint-disable-next-line import/no-cycle
import sort from './sort.js';

const tasksContainer = document.getElementById('tasks');

export default () => {
  tasksContainer.innerHTML = '';
  tasks.forEach((element) => {
    const li = document.createElement('li');
    if (element.completed) {
      li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center droppable">
            <div class="droppable"> 
            <input class="checkbox m-2" type="checkbox" id="${element.index}" checked>
            <label for="${element.index}">${element.description}</label>
            </div>
            <i class="fas fa-ellipsis-v"></i>
            </div>
            `;
    } else {
      li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center droppable">
            <div class="droppable"> 
            <input class="checkbox m-2" type="checkbox" id="${element.index}">
            <label class="droppable" for="${element.index}">${element.description}</label>
            </div>
            <i class="fas fa-ellipsis-v droppable" ></i>
            </div>
            `;
    }
    li.classList.add('list-group-item', 'draggable', 'droppable');
    li.setAttribute('draggable', 'true');
    tasksContainer.appendChild(li);
  });
  sort();
};
