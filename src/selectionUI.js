import { allTaskCount, allTasks, completedTaskCount, todayTaskCount } from "./selectionManager.js";
import { displayTasks } from "./displayTasksUI.js";


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

let allBtn = document.querySelector("#all");
allBtn.addEventListener('click', () => {
    
});

export function allBtnAction(){
    updateSelection(0);
    displayTasks(0);
}

export function todayBtnAction(){
    updateSelection(1);
    displayTasks(1);
}


let completedBtn = document.querySelector("#completed");
completedBtn.addEventListener('click', () => {
    state = 2;
    selection.textContent = "Completed";
    let count = completedTaskCount();
    selectionNum.textContent = count;
    displayTasks();
});


const taskContainer = document.querySelector('.task-container');

taskContainer.addEventListener('click', (event) => {
  // Finds the nearest .task element relative to what was clicked
  const taskElement = event.target.closest('.task');

  // Check if a .task element (or something inside it) was clicked
  if (taskElement && taskContainer.contains(taskElement)) {
    // Get the data-task-id value
    const taskId = taskElement.dataset.taskId;

    console.log('Clicked Task ID:', taskId);
    //toggleStatus(taskId);
  }
});