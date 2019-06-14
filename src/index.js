class ToDo {
    constructor (){
            this.title=[];
            this.id=[];
            this.isDone= [];
       };

    addItem (task){
        this.id.push(task.id);
        this.title.push(task.title);
    }
    // editItem (){

    // }

}

class TaskItem {
    constructor (id,title){
        this.id=id;    
        this.title=title;
        this.isDone=false;
        }
}

class SubTaskItem extends TaskItem {
    constructor (){
        super();

    }
}
let list = new ToDo();
let task1 = new TaskItem(1,'perviy');
let task2 = new TaskItem(2,'vtoroy');
list.addItem(task1);
list.addItem(task2);
console.log(list);
console.log(task1);

window.onload=function(){
    const submit = document.getElementById('submit');
    const field = document.getElementById('inp');
    submit.addEventListener('click', function (){
        console.log(field.value);
        let task2=new TaskItem(Math.floor(Math.random()*100),field.value);
        list.addItem(task2);
    });
    console.log(submit);
    console.log(field);
    
}



