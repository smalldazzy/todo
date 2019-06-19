import TaskItem from "./TaskItem";
import SubTaskItem from './SubTaskItem';
import TaskItemTime from "./TaskItemTime";
export default class ToDo {
    constructor() {
        this.store = [];
    };

    addItem(task) {
        if (task.date) {
            this.store.push({
                id: task.id,
                title: task.title,
                date: task.date,
                isDone: task.isDone
            })
        } else {
            this.store.push({
                id: task.id,
                title: task.title,
                isDone: task.isDone,
                subTasks: task.subTasks
            });
        }

    }
    save() {
        console.log('saved');
        localStorage.setItem("TODO", JSON.stringify(this.store));
    }
    getItems() {
        if (localStorage.getItem("TODO")) {
            let returnObj = JSON.parse(localStorage.getItem("TODO")) || [];
            returnObj.forEach(element => {
                if (element.date) {
                    this.store.push(new TaskItemTime(element.title, element.date, element.id, element.isDone));
                } else {
                    this.store.push(new TaskItem(element.title, element.id, element.isDone, element.subTasks));
                }

            });
        }
    }
    deleteItem(i) {
        this.store.splice(i, 1);
        this.save();
    }
    deleteDone() {
        for (let i = this.store.length - 1; i >= 0; i--) {
            if (this.store[i].isDone === true) { this.deleteItem(i); console.log('udoli'); }
        }
        this.save();
    }
}