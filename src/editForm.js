function editForm(task) {
  const form = document.querySelector('form');
  const h3 = form.querySelector('h3');
  const saveBtn = form.querySelector('.confirm-btn');

  h3.textContent = 'edit task';
  saveBtn.textContent = 'save';

  populateForm(task);

  form.style.display = 'grid';
}

function populateForm(task) {
  const titleInput = document.getElementById('title');
  titleInput.value = task.title;

  const descriptionInput = document.getElementById('description');
  descriptionInput.value = task.desc;

  const dueDateInput = document.getElementById('due-date');
  dueDateInput.value = task.dueDate;

  const priorityInput = document.getElementById(task.priority);
  priorityInput.checked = true;

  const checklistItems = document.querySelector('ul');
  task.checklist.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    checklistItems.appendChild(listItem);
  })
}