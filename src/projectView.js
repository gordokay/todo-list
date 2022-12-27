import { renderTaskView, clearTaskView } from "./taskView";
import { getActiveProject } from "./todoListView";

const taskContainterHeading = document.querySelector('.tasks h2');

export function renderProjectView(project) {
  taskContainterHeading.textContent = project.name; 
  project.tasks.forEach(task => renderTaskView(task));
}

export function clearProjectView() {
  taskContainterHeading.textContent = '';
  getActiveProject().tasks.forEach(task => {
    clearTaskView(task.id);
  })
}