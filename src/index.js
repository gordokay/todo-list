import Task from "./task";
import taskView from "./taskView";

const t1 = new Task('do stuff', 'do some things', '05-28-3000', 1, ['do', 'the', 'stuff']);
taskView(t1);

const addButton = document.querySelector('.new-task-btn');
const cancelButton = document.querySelector('.cancel-btn');
const form = document.querySelector('form');
const checklistButton = document.querySelector('.checklist-btn');
const checklistInput = document.getElementById('checklist');
const checklistItemContainer = document.querySelector('.checklist-items');
checklistButton.addEventListener('click', () => {
  if(checklistInput.value) {
    const item = document.createElement('p');
    item.classList.add('item');
    item.textContent = checklistInput.value;
    checklistItemContainer.appendChild(item);
    checklistInput.value = '';
  }
})
cancelButton.addEventListener('click', () => {
  form.style.display = 'none';
})
addButton.addEventListener('click', () => {
  form.style.display = 'block';
})


