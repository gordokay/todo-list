export default class Project {
  constructor(name) {
    this.id = Project.id;
    Project.id++;
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    this.tasks.splice(this.activeTasks.indexOf(task), 1);
  }
}

Project.id = 0;