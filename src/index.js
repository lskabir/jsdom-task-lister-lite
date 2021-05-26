document.addEventListener("DOMContentLoaded", () => {
});

const taskForm = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks')

taskForm.addEventListener('submit', function(e) {
  e.preventDefault()

  const newTask = document.getElementById('new-task-description').value

  taskList.innerHTML += `
    <li> ${newTask} 
      <button data-action='delete'>X</button>
    </li>
  `
  taskForm.reset()
})

taskList.addEventListener('click', function(e) {
  if (e.target.dataset.action === 'delete') {
    e.target.parentElement.remove()
  }
})