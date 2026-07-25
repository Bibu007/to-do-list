import { exportTaskMap } from "./taskManager.js";
import { isToday } from "date-fns";
import { exportList } from "./listManager.js";

export function todaysTasks(){
    let taskMap = exportTaskMap();
    let todayMap = {};

    for(const t in taskMap){
        //console.log(taskMap[t]);
        if(isToday(taskMap[t].dueDate)){
            console.log("Hey");
            todayMap[taskMap[t].id] = taskMap[t];
        }
    }

    return todayMap;
}

export function completedTasks(){
    let taskMap = exportTaskMap();
    let completedMap = {};

    for(const t in taskMap){
        if(taskMap[t].isComplete){
            completedMap[taskMap[t].id] = taskMap[t];
        }
    }

    return completedMap;
}

export function allTasks(){
    let taskMap = exportTaskMap();

    return taskMap;
}

export function listTasks(listName){
    
}