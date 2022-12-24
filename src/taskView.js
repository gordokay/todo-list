import editForm from "./editForm";

const taskContainer = document.querySelector('.tasks');

export function renderTaskView(task) {
  const taskView = document.createElement('div');
  taskView.setAttribute('data-id', task.id);

  const title = document.createElement('h4');
  title.textContent = task.title;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'edit';
  editBtn.addEventListener('click', editForm.bind(this, task));

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

  taskView.append(title, desc, dueDate, priority, checklist, isComplete, editBtn);
  taskContainer.appendChild(taskView);
}

export function clearTaskView(id) {
  const taskView = document.querySelector(`[data-id='${id}']`);
  while(taskView.firstChild) {
    taskView.removeChild(taskView.firstChild);
  }
  taskContainer.removeChild(taskView);
}