import './style.css';

const tasksDiv = document.getElementById('tasks');
const tasks = [];
class Task {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}
const task1 = new Task(1, 'first task', false);
const task2 = new Task(2, 'second task', false);
const task3 = new Task(3, 'third task', true);
const task4 = new Task(4, 'forth task', true);
tasks.push(task1, task2, task3, task4);
const addTasks = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    const tableRow = document.createElement('tr');
    const task = tasks[i];
    tableRow.innerHTML = `<td>${task.index}</td>
                            <td>${task.description}</td>`;
    tasksDiv.appendChild(tableRow);
  }
};
addTasks(tasks);