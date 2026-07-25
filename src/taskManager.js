import { Task } from "./task.js";
import { updateTasksStorage } from "./storageService.js";
import { addtoList, deleteFromList } from "./listManager.js";

let taskMap = {};

export function createTask(title, desc, date, list){
    let t = new Task(title, desc, date, list);
    taskMap[t.id] = t;
    updateTasksStorage(taskMap);
    addtoList(t.id, list);
    //console.log(JSON.stringify(taskMap));
    return t;
};

export function deleteTask(taskId){
    if(taskId in taskMap){
        deleteFromList(taskId, taskMap[taskId].list);
        delete taskMap[taskId];
        updateTasksStorage(taskMap);
    }
}

export function editTask(taskId, title, desc, date){
    taskMap[taskId].title = title;
    taskMap[taskId].desc = desc;
    taskMap[taskId].dueDate = date;
    updateTasksStorage(taskMap);
}

export function toggleStatus(taskId){
    if(taskMap[taskId].isComplete){
        taskMap[taskId].isComplete = false;
    }
    else{
        taskMap[taskId].isComplete = true;
    }
    updateTasksStorage(taskMap);
}

export function exportTaskMap(){
    return taskMap;
}