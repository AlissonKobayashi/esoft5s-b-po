const taskKey = '@tasks';

function addTask(event) {
  event.preventDefault();

  const taskId = new Date().getTime();
  const form = document.querySelector('#taskForm');
  const formData = new FormData(form);

  const taskTitle = formData.get('title');
  const taskDescription = formData.get('description');

  const task = {
    id: taskId,
    title: taskTitle,
    description: taskDescription
  };

  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  tasks.push(task);
  localStorage.setItem(taskKey, JSON.stringify(tasks));

  renderizarTarefas(tasks);

  form.reset();
}

function editarTarefa(taskId) {
  const editTitle = document.querySelector('#editTaskForm #title').value;
  const editDescription = document.querySelector('#editTaskForm #description').value;

  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];

  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex].title = editTitle;
    tasks[taskIndex].description = editDescription;

    localStorage.setItem(taskKey, JSON.stringify(tasks));

    renderizarTarefas(tasks);

    closeDialog();
  }
}

function excluirTarefa(taskId) {
  let tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  tasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem(taskKey, JSON.stringify(tasks));

  renderizarTarefas(tasks);
}

function openEditDialog(taskId) {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  const task = tasks.find(task => task.id === taskId);

  const dialog = document.querySelector('dialog');
  const editTitle = document.querySelector('#editTaskForm #title');
  const editDescription = document.querySelector('#editTaskForm #description');

  editTitle.value = task.title;
  editDescription.value = task.description;

  dialog.showModal();
}

function closeDialog() {
  const dialog = document.querySelector('dialog');
  dialog.close();
}

function renderizarTarefas(tasks) {
  const taskList = document.querySelector('#taskList');

  taskList.innerHTML = tasks.map(task => `
    <li id='id-${task.id}'>
      <div>
        <h2>${task.title}</h2>
        <p>${task.description}</p>
      </div>
      <button title="Editar tarefa" onClick="openEditDialog(${task.id})" style="margin-right: 5px;">✏️</button>
      <button title="Excluir tarefa" onClick="excluirTarefa(${task.id})" style="margin-left: 5px;">❌</button>
    </li>
  `).join('');
}

window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  renderizarTarefas(tasks);
});