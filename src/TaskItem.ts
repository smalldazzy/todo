function idgen() {
    return Math.floor(Math.random() * 100);
}
export default class TaskItem {
    title: string;
    id: number;
    isDone: boolean;
    subTasks: any[];
    constructor(title: string, id = idgen(), isDone = false, subTasks = []) {
        this.title = title;
        this.id = id;
        this.isDone = isDone;
        this.subTasks = subTasks;
    }
    switch() {
        this.isDone = !this.isDone;
    }
    addSubItem(subtask: any) {
        this.subTasks.push({
            title: subtask.title,
            id: subtask.id,
            isDone: subtask.isDone
        });
    }
}
