import "./styles.css";
import { createList, deleteList, editList, displayList } from "./listManager.js";
import { createTask, deleteTask, editTask, toggleStatus} from "./taskManager.js";
import { todaysTasks, completedTasks, allTasks } from "./selectionManager.js";


let p = createList("Default");
let q = createList("Shopping");
let s = createList("Study")

let t = createTask("Buy Grocery", "None", new Date(), p.name);
toggleStatus(t.id);
let r = createTask("Do laundry", "None", new Date(), p.name);
createTask("Buy towel", "None", new Date('2026-07-24'), q.name);
createTask("Buy socks", "None", new Date('2026-07-25'), q.name);
createTask("Buy vegetables", "None", new Date('2026-07-26'), q.name);
createTask("Buy pencils", "None", new Date('2026-07-24'), q.name);

createTask("Revise physics", "None", new Date('2026-07-24'), s.name);
createTask("Study chemistry", "None", new Date('2026-07-24'), s.name);
createTask("Finish project", "None", new Date('2026-07-27'), s.name);
//removeTask(t.id);
editTask(t.id,"Buy Chappal", "None", new Date());
//toggleStatus(t.id);
//toggleStatus(r.id);

deleteTask(r.id);

//displayList("Default");

console.log(todaysTasks());
console.log(allTasks());
console.log(completedTasks());




