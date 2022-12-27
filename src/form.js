import Task from "./task";
import {renderTaskView, clearTaskView} from "./taskView";
import { getActiveProject } from "./todoListView";

const form = document.querySelector('form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const dueDateInput = document.getElementById('due-date');
const checklistInput = document.getElementById('checklist');
const checklistItems = document.querySelector('.checklist-items');
const priorities = document.querySelectorAll('[type="radio"]');
const h3 = form.querySelector('h3');
const checklistButton = form.querySelector('.checklist-btn');
const confirmBtn = form.querySelector('.confirm-btn');
const cancelBtn = form.querySelector('.cancel-btn');

let boundSaveForm;

export default function renderForm(task) {
  if(task) {
    populateForm(task);
  }

  boundSaveForm = saveForm.bind(this, task);

  h3.textContent = task ? 'edit task' : 'add task';
  confirmBtn.textContent = task ? 'save' : 'add';
  confirmBtn.addEventListener('click', boundSaveForm);

  form.style.display = 'grid';
}

function bindEvents() {
  cancelBtn.addEventListener('click', clearForm);
  checklistButton.addEventListener('click', addItemToChecklist);
}

function populateForm(task) {
  titleInput.value = task.title;
  descriptionInput.value = task.desc;
  dueDateInput.value = task.dueDate;

  for(let priority of priorities) {
    if(priority.id === task.priority) {
      priority.checked = true;
      break;
    }
  }

  task.checklist.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    checklistItems.appendChild(listItem);
  })
}

function clearForm() {
  titleInput.value = '';
  descriptionInput.value = '';
  dueDateInput.value = '';

  priorities.forEach(priority => priority.checked = false);

  while(checklistItems.firstChild) {
    checklistItems.removeChild(checklistItems.firstChild);
  }

  form.style.display = 'none';
  confirmBtn.removeEventListener('click', boundSaveForm);
}

function saveForm(task) {
  if(!task) {
    task = new Task();
    getActiveProject().addTask(task);
  }

  task.title = titleInput.value;
  task.desc = descriptionInput.value;
  task.dueDate = dueDateInput.value;
  
  let priorityInput;
  for(let priority of priorities) {
    if(priority.checked === true) {
      priorityInput = priority;
      break;
    }
  }
  task.priority = priorityInput ? priorityInput.value : '';

  task.checklist.splice(0);
  for(let li of checklistItems.childNodes) {
    task.addToChecklist(li.textContent);
  }

  if(document.querySelector(`[data-task-id='${task.id}']`)) {
    clearTaskView(task.id);
  }

  renderTaskView(task);
  clearForm();
}

function addItemToChecklist() {
  if(checklistInput.value) {
    const item = document.createElement('li');
    item.textContent = checklistInput.value;
    checklistItems.appendChild(item);
    checklistInput.value = '';
  }
}

bindEvents();