import { allTaskCount, todayTaskCount, completedTaskCount, allTasks, todaysTasks, completedTasks } from "./selectionManager.js";
import { populateTaskMap, createTask, toggleStatus } from "./taskManager.js";
import PubSub from "pubsub-js";
import { formatDistanceToNow } from 'date-fns';
import { allBtnAction, updateAllCount, updateCompletedCount, updateSelection, updateTodayCount, todayBtnAction, completedBtnAction, removeTask} from "./selectionUI.js";
import { displayTasks } from "./displayTasksUI.js"
import { formUI } from "./formUI.js";

let selection = 0; 

export function getSelection(){
    return selection;
}

export function setSelection(select){
    selection = select;
}

export function initUI(){

    let selection = getSelection();

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

    let completedBtn = document.querySelector("#completed");
    completedBtn.addEventListener('click', completedBtnAction);

    // ------------ task click --------------

    const taskContainer = document.querySelector('.task-container');

    taskContainer.addEventListener('click', (event) => {
    // Finds the nearest .task element relative to what was clicked
    const taskElement = event.target.closest('.task');

    // Check if a .task element (or something inside it) was clicked
    if (taskElement && taskContainer.contains(taskElement)) {
    // Get the data-task-id value
    const taskId = taskElement.dataset.taskId;
    
    const removeBtn = document.querySelector("#remove-btn");
    removeBtn.addEventListener('click', (event) => {removeTask(getSelection(), event.target.parentElement.dataset.taskId);
        return;
    });

    console.log('Clicked Task ID:', taskId);
    toggleStatus(taskId);
    //toggleStatus(taskId);
    console.log(`selection: ${getSelection()}`);
    updateSelection(getSelection());
    if(taskElement.classList.contains("completed")){
        taskElement.classList.remove("completed")
    }
    else{
        taskElement.classList.add("completed");
    }
    //displayTasks(getSelection());
  }
});

    
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
