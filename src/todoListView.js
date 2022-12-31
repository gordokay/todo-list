import Task from "./task";
import TodoList from "./todoList";
import Project from "./project";
import {renderProjectView, clearProjectView} from "./projectView";

const projectList = document.querySelector('.projects');
const newProjectBtn = document.querySelector('.new-project-btn');
const newProjectInputContainer = document.querySelector('.new-project-input');
const newProjectInput = document.getElementById('new-project');
const addProjectBtn = document.querySelector('.add-project-btn');
const cancelProjectBtn = document.querySelector('.cancel-project-btn');
const colorPicker = document.querySelector('.icon-color-picker');

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
  newProject.setAttribute('data-proj-id', project.id);

  const newProjectIcon = document.createElement('span');
  const newProjectName = document.createElement('p');

  newProjectName.textContent = project.name;

  newProject.append(newProjectIcon, newProjectName);
  projectList.insertBefore(newProject, newProjectBtn);

  newProjectIcon.addEventListener('click', toggleColorPicker);

  newProject.addEventListener('click', () => {
    clearProjectView();
    renderProjectView(project);
    activeProject = project;
  })
}

function toggleColorPicker() {
  if(colorPicker.style.display === 'block') {
    colorPicker.style.display = 'none';
  } else {
    colorPicker.style.display = 'block';
  }
  colorPicker.setAttribute('data-proj', this.parentNode.getAttribute('data-proj-id'));
  colorPicker.style.top = `calc(${this.parentNode.offsetTop}px - 2em)`;
}

function changeIconColor() {
  const newColor = getComputedStyle(this).backgroundColor;
  const projId = this.parentNode.getAttribute('data-proj');
  const proj = document.querySelector(`[data-proj-id='${projId}']`);
  proj.querySelector('span').style.backgroundColor = newColor;
  colorPicker.style.display = 'none';
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

  const colorIcons = colorPicker.querySelectorAll('span');
  colorIcons.forEach(icon => {
    icon.addEventListener('click', changeIconColor);
  })
}

function setDefaultProject() {
  const defaultProject = new Project('tasks');

  const task1 = new Task('task a', 'a description', '06-12-1970', 'medium');
  task1.addToChecklist('a');
  task1.addToChecklist('b');

  const task2 = new Task('task b', 'b description', '09-13-2023', 'high');
  task2.addToChecklist('c');
  task2.addToChecklist('d');

  defaultProject.addTask(task1);
  defaultProject.addTask(task2); 

  activeProject = defaultProject;
  addProjectToList(defaultProject);
  renderProjectView(defaultProject);
}

bindEvents();
setDefaultProject();