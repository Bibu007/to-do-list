import { allTaskCount, allTasks, completedTaskCount, todayTaskCount } from "./selectionManager.js";
import { displayTasks } from "./displayTasksUI.js";
import { setSelection } from "./screenController.js";
import { deleteTask } from "./taskManager.js";


export function updateSelection(selection){
    let selectionHeader = document.querySelector("#selection");
    let selectionNum = document.querySelector("#selection-num");

    if(selection === 0){
        selectionHeader.textContent = "All";
        selectionNum.textContent = allTaskCount();
    }
    else if(selection === 1){
        selectionHeader.textContent = "Today";
        selectionNum.textContent = todayTaskCount();
    }
    else if(selection === 2){
        selectionHeader.textContent = "Completed";
        selectionNum.textContent = completedTaskCount();
    }

}

export function updateAllCount(){
    let count = allTaskCount();
    let all = document.querySelector("#all-num");
    all.textContent = count;
}

export function updateTodayCount(){
    let count = todayTaskCount();
    let today = document.querySelector("#today-num");
    today.textContent = count;
}

export function updateCompletedCount(){
    let count = completedTaskCount();
    let completed = document.querySelector("#completed-num");
    completed.textContent = count;
}

export function removeTask(selection,taskId){
    deleteTask(taskId);
    updateSelection(selection);
    displayTasks(selection);
}

export function allBtnAction(){
    setSelection(0);
    updateSelection(0);
    displayTasks(0);
}

export function todayBtnAction(){
    setSelection(1);
    updateSelection(1);
    displayTasks(1);
}

export function completedBtnAction(){
    setSelection(2);
    updateSelection(2);
    displayTasks(2);
}


