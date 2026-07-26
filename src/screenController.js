import { allTaskCount, todayTaskCount, completedTaskCount, allTasks, todaysTasks, completedTasks } from "./selectionManager.js";
import { populateTaskMap, createTask, toggleStatus } from "./taskManager.js";
import PubSub from "pubsub-js";
import { formatDistanceToNow } from 'date-fns';
import { allBtnAction, updateAllCount, updateCompletedCount, updateSelection, updateTodayCount, todayBtnAction} from "./selectionUI.js";
import { displayTasks } from "./displayTasksUI.js"
import { formUI } from "./formUI.js";

let state = 0; 

export function initUI(){

    let selection = 0;

    let taskMap = populateTaskMap();

    updateSelection(selection);
    updateAllCount();
    updateTodayCount();
    updateCompletedCount();

    if(!(Object.keys(taskMap).length === 0)){
        displayTasks(selection);
    }

    const addTaskBtn = document.querySelector("#add-task-btn");
    addTaskBtn.addEventListener("click", formUI());

    let allBtn = document.querySelector("#all");
    allBtn.addEventListener('click', allBtnAction);

    let todayBtn = document.querySelector("#today");
    todayBtn.addEventListener('click', todayBtnAction);
    
    PubSub.subscribe('UPDATE', changeAll);
    function changeAll(msg,data){
        
        let count = allTaskCount();
        let all = document.querySelector("#all-num");
        all.textContent = count;
    }

    PubSub.subscribe('UPDATE', changeToday);
    function changeToday(msg,data){
        
        let count = todayTaskCount();
        console.log(count);
        let today = document.querySelector("#today-num");
        today.textContent = count;
    }

    PubSub.subscribe('UPDATE', changeCompleted);
    function changeCompleted(msg,data){
        
        let count = completedTaskCount();
        console.log(count);
        let completed = document.querySelector("#completed-num");
        completed.textContent = count;
    }
}

/*
var mySubscriber = function(msg,data){
    console.log(data);
    //console.log(`Final: ${data}`);
    //console.log(data);
    //PubSub.publish('ALL_UPDATED', Number(all));
}

PubSub.subscribe('MY TOPIC', printmsg);

function printmsg(){
    console.log("WTF");
}

var mySubscriber = function(msg,data){
    let all = allTaskCount();
    console.log(`All: ${all}`);
    //console.log(data);
    //PubSub.publish('ALL_UPDATED', Number(all));
    //PubSub.publish('SAMPLE', 'WTF')
    
}
*/
