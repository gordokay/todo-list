export default function taskView(task) {
  const taskContainer = document.querySelector('.tasks');
  
  const taskView = document.createElement('div');

  const title = document.createElement('h4');
  title.textContent = task.title;

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

  taskView.append(title, desc, dueDate, priority, checklist, isComplete);
  taskContainer.appendChild(taskView);
}