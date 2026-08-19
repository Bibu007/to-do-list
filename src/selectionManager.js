import { exportTaskMap } from "./taskManager.js";
import { isToday } from "date-fns";

export function todaysTasks(){
    let taskMap = exportTaskMap();
    let todayMap = {};

    for(const t in taskMap){
        //console.log(taskMap[t]);
        if(isToday(taskMap[t].dueDate)){
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

export function allTaskCount(){
    let taskMap = exportTaskMap();
    let count = 0;

    for(let i in taskMap){
        if(taskMap[i].isComplete === true){continue;}
        count++;
    }
    
    return count;
}

export function todayTaskCount(){
    let todayMap = todaysTasks();
    let count = 0;

    for(let i in todayMap){
        count++;
    }
    
    return count;
}

export function completedTaskCount(){
    let completedMap = completedTasks();
    let count = 0;

    for(let i in completedMap){
        count++;
    }
    
    return count;
}
/*
export function listTasks(listName){
    
}

var mySubscriber = function(msg,data){
    //let all = allTaskCount();
    console.log(`All: ${data}`);
    //console.log(data);
    //PubSub.publish('ALL_UPDATED', Number(all));
    //PubSub.publish('SAMPLE', 'WTF')
    
}
*/
//PubSub.subscribe('ADD', mySubscriber)

//PubSub.subscribe('MY TOPIC', mySubscriber);
