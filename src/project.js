export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.activeTasks.push(task);
  }

  deleteTask(task) {
    this.activeTasks.splice(this.activeTasks.indexOf(task), 1);
  }
}