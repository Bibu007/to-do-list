import { updateSelection } from "./selectionUI.js";
import { createTask } from "./taskManager.js";
import { displayTasks } from "./displayTasksUI.js";
import { allTasks } from "./selectionManager.js";


export function formUI(){
    let taskMap = allTasks();
    const add = document.querySelector("#add-task-btn");
    const dialog = document.querySelector(".add-task-dialog");
    const closeBtn = document.querySelector("#close");
    
    const myForm = document.getElementById("add-new-task");
    myForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent standard page reload
    
      const formData = new FormData(myForm);
      const formObject = Object.fromEntries(formData.entries());
    
      console.log(formObject); 
      // Output: { username: "JohnDoe", email: "john@example.com" }
    
      //l.addNewBookTolibrary(formObject.title, formObject.author, formObject.pages);
      createTask(taskMap, formObject.title, formObject.desc, formObject.dueDate, "Default")
    
      //l.displayBooks();

      dialog.close();
      myForm.reset();
      displayTasks(0);
      updateSelection(0);
    });
    
    
    
    add.addEventListener('click', () => {dialog.showModal();});
    closeBtn.addEventListener('click', () => dialog.close());
}