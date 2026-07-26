import { formatDistanceToNow } from "date-fns";
import { differenceInCalendarDays } from 'date-fns';
import deleteicon from "./images/delete_icon.svg"

export function createTaskTile(taskId, titleInput, descInput, dateInput){
    let task = document.createElement("div");
    task.classList.add("task");
    let radio = document.createElement("input");
    radio.type = "radio";
    task.appendChild(radio);
    let title_desc_container = document.createElement("div");
    title_desc_container.classList.add("title-desc-container");
    let title = document.createElement("div");
    title.id = "title";
    title.textContent = titleInput;
    let desc = document.createElement("div");
    desc.textContent = descInput;
    title_desc_container.appendChild(title);
    title_desc_container.appendChild(desc);
    task.appendChild(title_desc_container)
    let dueDate = document.createElement("div");
    console.log(`Date: ${dateInput}`);
    const relativeTime = getDueDaysStatus(dateInput);
    //const relativeTime = differenceInDays(dateInput, { addSuffix: true });
    dueDate.classList.add("dueDate");
    dueDate.textContent = `${relativeTime}`;
    task.appendChild(dueDate);
    const remove = document.createElement("button");
    const image = document.createElement("img");
    image.src = deleteicon;
    remove.id = "remove-btn";
    remove.appendChild(image)
    task.appendChild(remove);
    task.dataset.taskId = taskId;

    return task;
}

function getDueDaysStatus(dueDate) {
        const daysLeft = differenceInCalendarDays(dueDate, new Date());

        if (daysLeft === 0) return 'Due today';
        if (daysLeft === 1) return 'Due in 1 day';
        if (daysLeft > 1) return `Due in ${daysLeft} days`;
        if (daysLeft === -1) return 'Overdue by 1 day';
        return `Overdue by ${Math.abs(daysLeft)} days`;
}