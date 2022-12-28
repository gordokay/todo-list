import { renderTaskView, clearTaskView } from "./taskView";
import { getActiveProject } from "./todoListView";

const taskContainerHeading = document.querySelector('.tasks h2');

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