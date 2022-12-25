export default class Task {
  constructor(title, desc, dueDate, priority) {
    this.id = Task.id;
    Task.id++;

    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = [];
    this.isComplete = false;
  }

  addToChecklist(item) {
    this.checklist.push(item);
  }
}

Task.id = 0;