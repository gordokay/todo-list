import { renderTaskView, clearTaskView } from "./taskView";
import { getActiveProject } from "./todoListView";

const taskContainer = document.querySelector('.tasks');
const taskContainerHeading = document.querySelector('.tasks h2');

const renameProjectContainer = document.querySelector('.project-rename');
const renameProjectBtn = document.querySelector('.rename-project-btn');
const renameProjectInput = document.getElementById('project-rename-input');
const renameProjectConfirm = document.querySelector('.project-rename-confirm');
const renameProjectCancel = document.querySelector('.project-rename-cancel');

taskContainer.addEventListener('click', removeTaskFromProject);
renameProjectBtn.addEventListener('click', toggleRenameProject);
renameProjectCancel.addEventListener('click', toggleRenameProject);
renameProjectConfirm.addEventListener('click', renameProject);

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

function toggleRenameProject() {
  if(renameProjectContainer.style.display === 'none' || !renameProjectContainer.style.display) {
    renameProjectContainer.style.display = 'block';
    renameProjectInput.value = taskContainerHeading.textContent;
    taskContainerHeading.style.display = 'none';
    renameProjectBtn.style.visibility = 'hidden';
  } else {
    renameProjectContainer.style.display = 'none';
    renameProjectInput.value = '';
    taskContainerHeading.style.display = 'block';
    renameProjectBtn.style.visibility = 'visible';
  }
}

function renameProject() {
  if(renameProjectInput.value) {
    taskContainerHeading.textContent = renameProjectInput.value;
    getActiveProject().name = renameProjectInput.value;
    const activeProject = document.querySelector(`[data-proj-id='${getActiveProject().id}']`);
    activeProject.querySelector('p').textContent = renameProjectInput.value;
    toggleRenameProject();
    localStorage.setItem(`project${getActiveProject().id}`, JSON.stringify(getActiveProject()));
  }
}

function removeTaskFromProject(e) {
  if(e.target.className === 'delete-btn') {
    const taskId = e.target.parentNode.parentNode.getAttribute('data-task-id');
    getActiveProject().deleteTaskById(taskId);
    clearTaskView(taskId);
    localStorage.setItem(`project${getActiveProject().id}`, JSON.stringify(getActiveProject()));
  }
}