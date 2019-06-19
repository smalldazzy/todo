import TaskItem from './TaskItem';
function idgen() {
    return Math.floor(Math.random() * 100);
}
export default class SubTaskItem extends TaskItem {
    constructor(title, id = idgen(), isDone = false) {
        super(title, id, isDone);
    }
}