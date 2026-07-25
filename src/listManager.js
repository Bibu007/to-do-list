import { updateListsStorage } from "./storageService.js";

class List{
    constructor(name){
        this.id = crypto.randomUUID();
        this.name = name;
        this.tasks = [];
    }
}

let listMap = {};

export function createList(name){
    let l = new List(name);
    if(listMap[name]){
        console.log("List already exists");
    }
    else{
        listMap[name] = l;
    }
    updateListsStorage(listMap);
    //console.log(JSON.stringify(taskMap));
    return l;
};

export function deleteList(name){
    if(listMap[name]){
        for(let t of listMap[name].tasks){
            t.list = "Default";
        }
        delete listMap[name];
        updateListsStorage(listMap)
    }
    else{
        console.log("This list doesn't exist");
    }
}

export function editList(listId, name){
    listMap[listId].name = name;
    updateListsStorage(listMap);
}

export function addtoList(taskId, listName){
    listMap[listName].tasks.push(taskId);
    updateListsStorage(listMap);
}

export function deleteFromList(taskId, listName){
    let index = listMap[listName].tasks.indexOf(taskId);
    console.log(index);
    listMap[listName].tasks.splice(index,1);
    updateListsStorage(listMap);
}

export function displayList(){
    console.log(listMap);
}

export function exportList(){
    return listMap;
}