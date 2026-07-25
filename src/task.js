export class Task{

    constructor(title,desc,dueDate,list){
        this.id = crypto.randomUUID();
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.isComplete = false;
        this.list = list;
    }

}

 