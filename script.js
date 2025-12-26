const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (!task) return;

  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', (e) => { e.stopPropagation(); li.remove(); });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = '';
});
