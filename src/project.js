class Project {
  constructor(name) {
    this.name = name;
    this.activeTasks = [];
    this.completedTasks = [];
  }

  addTask(task) {
    this.activeTasks.push(task);
  }

  completeTask(task) {
    this.completedTasks.push(task);
  }
}