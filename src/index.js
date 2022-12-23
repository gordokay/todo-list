import Task from "./task";
import todoListView from "./todoListView";
import taskView from "./taskView";

todoListView();
const t1 = new Task('do stuff', 'do some things', '05-28-3000', 1, 'i gotta do some stuff', ['do', 'the', 'stuff']);
taskView(t1);

