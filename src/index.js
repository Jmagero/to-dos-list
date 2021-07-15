import './style.css';
import { Task, tasks } from './taskClass.js';
import addTasks  from './showTasks';
import { getTasks, saveTasks } from './localstorage.js';
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

// console.log(tasks);

// function enableDragList(tasks) {
//   tasks.forEach(element => {
//     //enableDragItem(element)
//     element.ondrag = handleDrag;
//     element.ondragend = handleDrop;
//   });
//   //Array.prototype.map.call(tasks.children, (item) => {enableDragItem(item)});
// }

// function enableDragItem(item) {
//   item.setAttribute('draggable', true)
//   item.ondrag = handleDrag;
//   item.ondragend = handleDrop;
// }

// function handleDrag(e) {
//   const selectedItem = e.target,
//         list = selectedItem.parentNode,
//         x = e.clientX,
//         y = e.clientY;
  
//   selectedItem.classList.add('drag-sort-active');
//   let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
//   console.log(swapItem);
  
//   if (list === swapItem.parentNode) {
//     swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
//     list.insertBefore(selectedItem, swapItem);
//   }
// }

// function handleDrop(item) {
//   item.target.classList.remove('drag-sort-active');
// }

// (()=> {enableDragSort('drag-sort-enable')})();