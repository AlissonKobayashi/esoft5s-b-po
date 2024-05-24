const taskKey = '@tasks';

// Função para adicionar tarefa
function addTask(event) {
  event.preventDefault(); // Evita o recarregamento da página
  const taskId = new Date().getTime();
  const taskList = document.querySelector('#taskList');

  const form = document.querySelector('#taskForm');
  const formData = new FormData(form);

  const taskTitle = formData.get('title');
  const taskDescription = formData.get('description');

  const li = document.createElement('li');
  li.id = taskId;
  li.innerHTML = `
    <h2>${taskTitle}</h2>
    <p>${taskDescription}</p>
    <button class="edit-btn" title="Editar tarefa">✏️</button>
  `;

  taskList.appendChild(li);

  // Salvar tarefas no localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  tasks.push({ id: taskId, title: taskTitle, description: taskDescription });
  localStorage.setItem(taskKey, JSON.stringify(tasks));

  form.reset();
  addEditButtonListener(li.querySelector('.edit-btn')); // Adicionar listener ao botão de edição
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  const taskList = document.querySelector('#taskList');
  taskList.innerHTML = tasks
    .map(task => `
      <li id="${task.id}">
        <h2>${task.title}</h2>
        <p>${task.description}</p>
        <button class="edit-btn" title="Editar tarefa">✏️</button>
      </li>
    `)
    .join('');

  document.querySelectorAll('.edit-btn').forEach(button => {
    addEditButtonListener(button);
  });
});

function addEditButtonListener(button) {
  button.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    const taskId = li.id;
    const taskTitle = li.querySelector('h2').textContent;
    const taskDescription = li.querySelector('p').textContent;

    const editDialog = document.getElementById('edit-dialog');
    const taskTitleInput = document.getElementById('task-title');
    const taskDescriptionInput = document.getElementById('task-description');
    const editForm = document.getElementById('edit-form');

    taskTitleInput.value = taskTitle;
    taskDescriptionInput.value = taskDescription;

    editDialog.style.display = 'block';

    editForm.onsubmit = (e) => {
      e.preventDefault();
      updateTask(taskId, taskTitleInput.value, taskDescriptionInput.value);
      editDialog.style.display = 'none';
    };
  });
}

function updateTask(taskId, newTitle, newDescription) {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  const taskIndex = tasks.findIndex(task => task.id === parseInt(taskId));
  if (taskIndex > -1) {
    tasks[taskIndex].title = newTitle;
    tasks[taskIndex].description = newDescription;
    localStorage.setItem(taskKey, JSON.stringify(tasks));
    const taskList = document.querySelector('#taskList');
    const li = taskList.querySelector(`#${taskId}`);
    li.querySelector('h2').textContent = newTitle;
    li.querySelector('p').textContent = newDescription;
  }
}

// Fechar o modal ao clicar no botão cancelar
document.getElementById('cancel-btn').addEventListener('click', () => {
  document.getElementById('edit-dialog').style.display = 'none';
});