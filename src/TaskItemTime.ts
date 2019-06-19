import TaskItem from "./TaskItem";
import SubTaskItem from "./SubTaskItem";
function idgen(){
    return Math.floor(Math.random()*100);
}
export default class TaskItemTime extends SubTaskItem{
    title!: string;
    date: string;
    constructor( title:string,date:string,id = idgen(),isDone = false)
    {
        super(title,id,isDone,date);
        this.date = date;
        if (!isDone && (+new Date(date)< (+new Date()))){
            this.isDone = true;
        }
    }
}