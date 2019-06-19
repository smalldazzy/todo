function idgen() {
    return Math.floor(Math.random() * 100);
}
export default class TaskItem {
    constructor(title, id = idgen(), isDone = false, subTasks = []) {
        this.title = title;
        this.id = id;
        this.isDone = isDone;
        this.subTasks = subTasks;
    }
    switch() {
        this.isDone = !this.isDone;
    }
    addSubItem(subtask) {
        this.subTasks.push({
            title: subtask.title,
            id: subtask.id,
            isDone: subtask.isDone
        });
    }
}
