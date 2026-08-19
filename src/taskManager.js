import { Task } from "./task.js";
import { updateTasksStorage } from "./storageService.js";
import { addtoList, deleteFromList } from "./listManager.js";
import PubSub from "pubsub-js";



export function populateTaskMap(){  
    let taskMap = {};
    if(localStorage.getItem("tasks")){
        let temp = (JSON.parse(localStorage.getItem("tasks")));
        taskMap = temp;
    }
    else{
        localStorage.setItem("tasks", JSON.stringify(taskMap));
        console.log("Local Storage empty");
    }

    return taskMap;
}

export function createTask(taskMap, title, desc, date, list){
    let t = new Task(title, desc, date, list);
    taskMap[t.id] = t;
    updateTasksStorage(taskMap);
    //addtoList(t.id, list);
    //console.log(JSON.stringify(taskMap));
    //let count = allTaskCount();
    //console.log(`count: ${count}`);
    
    return t;
};

export function deleteTask(taskId){
    let taskMap = exportTaskMap();
    if(taskId in taskMap){
        deleteFromList(taskId, taskMap[taskId].list);
        delete taskMap[taskId];
        updateTasksStorage(taskMap);
        //let count = allTaskCount();
        //console.log(`count: ${count}`);
        PubSub.publish('UPDATE','Hello');
    } 
}
/*
export function editTask(taskId, title, desc, date){
    taskMap[taskId].title = title;
    taskMap[taskId].desc = desc;
    taskMap[taskId].dueDate = date;
    updateTasksStorage(taskMap);
}
*/
export function toggleStatus(taskId){
    let taskMap = exportTaskMap();
    if(taskMap[taskId].isComplete){
        taskMap[taskId].isComplete = false;
    }
    else{
        taskMap[taskId].isComplete = true;
    }
    updateTasksStorage(taskMap);
}
    

export function exportTaskMap(){
    return populateTaskMap();
}

