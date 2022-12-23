export default class Project {
  constructor(name) {
    this.name = name;
    this.activeTasks = [];
    this.completedTasks = [];
  }

  addTask(task) {
    this.activeTasks.push(task);
  }

  deleteTask(task) {
    this.activeTasks.splice(this.activeTasks.indexOf(task), 1);
  }

  completeTask(task) {
    this.completedTasks.push(task);
  }
}