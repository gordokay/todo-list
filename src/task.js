export default class Task {
  constructor(id, title, desc, dueDate, priority, checklist) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.isComplete = false;
  }

  addToChecklist(item) {
    this.checklist.push(item);
  }
}