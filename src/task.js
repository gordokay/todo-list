export default class Task {
  constructor(title, desc, dueDate, priority, checklist) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.isComplete = false;
  }

  addToChecklist(item) {
    this.checklist.append(item);
  }
}