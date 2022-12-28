import { renderTaskView, clearTaskView } from "./taskView";
import { getActiveProject } from "./todoListView";

const taskContainer = document.querySelector('.tasks');
const taskContainerHeading = document.querySelector('.tasks h2');

taskContainer.addEventListener('click', removeTaskFromProject);

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

function removeTaskFromProject(e) {
  if(e.target.className === 'delete-btn') {
    const taskId = e.target.parentNode.parentNode.getAttribute('data-task-id');
    getActiveProject().deleteTaskById(taskId);
    clearTaskView(taskId);
  }
}