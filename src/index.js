document.addEventListener("DOMContentLoaded", () => {
});

const taskForm = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks')

taskForm.addEventListener('submit', function(e) {
  e.preventDefault()

  const newTask = document.getElementById('new-task-description').value

  const taskItem = document.createElement('li')
  taskItem.innerText = newTask

  taskList.appendChild(taskItem)
  taskForm.reset()

})