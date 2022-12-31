import { renderTaskView, clearTaskView } from "./taskView";
import { getActiveProject } from "./todoListView";

const taskContainer = document.querySelector('.tasks');
const taskContainerHeading = document.querySelector('.tasks h2');
const renameProjectBtn = document.querySelector('.rename-project-btn');
const renameProjectInput = document.getElementById('project-rename');

taskContainer.addEventListener('click', removeTaskFromProject);
renameProjectBtn.addEventListener('click', renameProject);

export function renderProjectView(project) {
  taskContainerHeading.textContent = project.name; 
  project.tasks.forEach(task => renderTaskView(task));
}

export function clearProjectView() {
  taskContainerHeading.textContent = '';
  getActiveProject().tasks.forEach(task => {
    clearTaskView(task.id);
  })
}

function renameProject() {
  renameProjectInput.style.display = 'block';
  renameProjectInput.value = taskContainerHeading.textContent;
  taskContainerHeading.style.display = 'none';
}

function removeTaskFromProject(e) {
  if(e.target.className === 'delete-btn') {
    const taskId = e.target.parentNode.parentNode.getAttribute('data-task-id');
    getActiveProject().deleteTaskById(taskId);
    clearTaskView(taskId);
  }
}