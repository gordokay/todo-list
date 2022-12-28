import TodoList from "./todoList";
import Project from "./project";
import {renderProjectView, clearProjectView} from "./projectView";

const projectList = document.querySelector('.projects');
const newProjectBtn = document.querySelector('.new-project-btn');
const newProjectInputContainer = document.querySelector('.new-project-input');
const newProjectInput = document.getElementById('new-project');
const addProjectBtn = document.querySelector('.add-project-btn');
const cancelProjectBtn = document.querySelector('.cancel-project-btn');

const todoList = new TodoList();
let activeProject;

export function getActiveProject() {
  return activeProject;
}

function showNewProjectInput() {
  newProjectBtn.style.display = 'none';
  newProjectInputContainer.style.display = 'block';
}

function addNewProject() {
  if(newProjectInput.value) {
    const newProject = new Project(newProjectInput.value);
    todoList.addProject(newProject);
    addProjectToList(newProject);
    clearProjectView();
    renderProjectView(newProject);
    activeProject = newProject;
    cancelProjectInput();
  }
}

function addProjectToList(project) {
  const newProject = document.createElement('div');
  newProject.setAttribute('data-proj', project.id);

  const newProjectIcon = document.createElement('span');
  const newProjectName = project.name;

  newProject.append(newProjectIcon, newProjectName);
  projectList.insertBefore(newProject, newProjectBtn);

  newProject.addEventListener('click', () => {
    clearProjectView();
    renderProjectView(project);
    activeProject = project;
  })
}

function cancelProjectInput() {
  newProjectBtn.style.display = 'inline';
  newProjectInputContainer.style.display = 'none';
  newProjectInput.value = '';
}

function bindEvents() {
  newProjectBtn.addEventListener('click', showNewProjectInput);
  addProjectBtn.addEventListener('click', addNewProject);
  cancelProjectBtn.addEventListener('click', cancelProjectInput);
}

function setDefaultProject() {
  const defaultProject = new Project('tasks');
  activeProject = defaultProject;
  addProjectToList(defaultProject);
  renderProjectView(defaultProject);
}

bindEvents();
setDefaultProject();