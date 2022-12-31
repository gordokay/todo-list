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
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  deleteTaskById(id) {
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].id === +id) {
        this.tasks.splice(i, 1);
        return;
      }
    }
  }
}

Project.id = 0;