import { createTaskTile } from "./createTaskTileUI.js";
import { allTasks,todaysTasks,completedTasks } from "./selectionManager.js";

export function displayTasks(state){
    let taskContainer = document.querySelector(".task-container");
    taskContainer.replaceChildren();
    taskContainer.textContent = "";
    if(state === 0){ 
        let taskMap = allTasks();
        console.log(taskMap);
        for(const c in taskMap){
            //console.log(c);
            //console.log(c.title);
            //if(taskMap[c].isComplete === true){tile.classList.add("completed");}
            if(taskMap[c].isComplete === true){continue;}
            let tile = createTaskTile(c, taskMap[c].title, taskMap[c].desc, taskMap[c].dueDate);
            taskContainer.prepend(tile);
        }
    }
    else if(state === 1){
        let taskMap = todaysTasks();

        for(const c in taskMap){
            let tile = createTaskTile(c, taskMap[c].title, taskMap[c].desc, taskMap[c].dueDate);
            if(taskMap[c].isComplete === true){tile.classList.add("completed");}
            taskContainer.prepend(tile);
        }
    }
    else if(state === 2){
        let taskMap = completedTasks();

        for(const c in taskMap){
            
            let tile = createTaskTile(c, taskMap[c].title, taskMap[c].desc, taskMap[c].dueDate);
            tile.classList.add("completed");
            taskContainer.prepend(tile);
        }
    }
}