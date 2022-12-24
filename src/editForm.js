import {renderTaskView, clearTaskView} from "./taskView";

const form = document.querySelector('form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const dueDateInput = document.getElementById('due-date');
const checklistItemsUl = document.querySelector('.checklist-items-ul');
const priorities = document.querySelectorAll('[type="radio"]');
const h3 = form.querySelector('h3');
const confirmBtn = form.querySelector('.confirm-btn');
const cancelBtn = form.querySelector('.cancel-btn');

export default function editForm(task) {
  h3.textContent = 'edit task';
  confirmBtn.textContent = 'save';

  cancelBtn.addEventListener('click', hideForm);
  confirmBtn.addEventListener('click', saveForm.bind(this, task));

  populateForm(task);

  form.style.display = 'grid';
}

function populateForm(task) {
  titleInput.value = task.title;
  descriptionInput.value = task.desc;
  dueDateInput.value = task.dueDate;

  const priorityInput = document.getElementById(task.priority);
  priorityInput.checked = true;

  task.checklist.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    checklistItemsUl.appendChild(listItem);
  })
}

function clearForm() {
  h3.textContent = 'new task';
  confirmBtn.textContent = 'add'

  titleInput.value = '';
  descriptionInput.value = '';
  dueDateInput.value = '';

  priorities.forEach(priority => priority.checked = false);

  while(checklistItemsUl.firstChild) {
    checklistItemsUl.removeChild(checklistItemsUl.firstChild);
  }
}

function hideForm() {
  form.display = 'none';
  clearForm();
}

function saveForm(task) {
  task.title = titleInput.value;
  task.desc = descriptionInput.value;
  task.dueDate = dueDateInput.value;
  
  let priorityInput;
  for(let priority of priorities) {
    if(priority.checked === true) {
      priorityInput = priority;
    }
  }
  task.priority = priorityInput.value;

  task.checklist.splice(0);
  for(let li of checklistItemsUl.childNodes) {
    task.addToChecklist(li.textContent);
  }

  clearTaskView(task.id);
  renderTaskView(task);
  hideForm();
}
