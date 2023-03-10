import renderForm from "./form";

const taskContainer = document.querySelector('.tasks');

export function renderTaskView(task) {
  const taskView = document.createElement('div');
  taskView.setAttribute('data-task-id', task.id);
  taskView.classList.add('task');

  const collapsibleItems = document.createElement('div');
  collapsibleItems.classList.add('collapsible-items');

  const title = document.createElement('h4');
  title.textContent = task.title;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'edit';
  editBtn.addEventListener('click', renderForm.bind(this, task));

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'delete';

  const desc = document.createElement('p');
  desc.textContent = task.desc;

  const dueDate = document.createElement('p');
  dueDate.textContent = task.dueDate;

  const priority = document.createElement('p');
  priority.textContent = task.priority;

  const checklist = document.createElement('ul');
  task.checklist.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    checklist.appendChild(listItem);
  })

  const isComplete = document.createElement('input');
  isComplete.setAttribute('type', 'checkbox');
  isComplete.checked = task.isComplete;

  collapsibleItems.append(desc, priority, checklist, editBtn, deleteBtn);
  collapsibleItems.style.display = 'none';

  taskView.append(isComplete, title, dueDate, collapsibleItems);
  taskView.addEventListener('click', toggleCollapsibleItems);

  let followingTask = document.querySelector(`[data-task-id='${task.id + 1}']`)
  if(followingTask) {
    taskContainer.insertBefore(taskView, followingTask);
  } else {
    taskContainer.appendChild(taskView);
  }
}

export function clearTaskView(id) {
  const taskView = document.querySelector(`[data-task-id='${id}']`);
  taskView.removeEventListener('click', toggleCollapsibleItems);

  while(taskView.firstChild) {
    taskView.removeChild(taskView.firstChild);
  }
  taskContainer.removeChild(taskView);
}

function toggleCollapsibleItems(e) {
  if(e.target !== this.querySelector('input') && e.target !== this.querySelector('button')) {
    const collapsibleItems = this.querySelector('.collapsible-items');
    collapsibleItems.style.display = collapsibleItems.style.display === 'none' ? 'block' : 'none';
  }
}