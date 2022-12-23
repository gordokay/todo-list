export default class Task {
  constructor(title, desc, dueDate, priority, notes, checklist) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }

  addToChecklist(item) {
    this.checklist.append(item);
  }
}