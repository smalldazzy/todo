import TaskItem from './TaskItem';
function idgen() {
    return Math.floor(Math.random() * 100);
}
export default class SubTaskItem extends TaskItem {
    title!: string;
    constructor(title: string, id = idgen(), isDone = false) {
        super(title, id, isDone);
    }
}