import PubSub from "pubsub-js";

let temp = [];
//localStorage.setItem("tasks", JSON.stringify(temp));

export function updateTasksStorage(taskMap){
    //console.log("Hey");
    //console.log(JSON.stringify(taskMap));
    localStorage.setItem("tasks", JSON.stringify(taskMap));
    let temp = (JSON.parse(localStorage.getItem("tasks")));
    console.log(JSON.stringify(temp));
    PubSub.publish('UPDATE','hELLO');
}

export function updateListsStorage(listMap){
    //console.log("Hey");
    //console.log(JSON.stringify(taskMap));
    localStorage.setItem("lists", JSON.stringify(listMap));
    let temp = (JSON.parse(localStorage.getItem("lists")));
    console.log(JSON.stringify(temp));
}

