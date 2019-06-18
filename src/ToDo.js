import TaskItem from "./TaskItem";
import SubTaskItem from './SubTaskItem';
import TasItemTime from './TaskItemTime';
import TaskItemTime from "./TaskItemTime";
export default class ToDo {
    constructor (){
            this.store=[];
       };

    addItem (task){
        if (task.date){
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
        // //view ostavit
        // const ulist = document.getElementById('list');
        // let lielem = document.createElement('li');
        // lielem.innerHTML = `<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${task.title}</p><button style="display:inline-block" class="del"> -</button>`
        // +'<button class="addsub">+</button>';
        // if (task.isDone) {lielem.firstChild.checked=true;}
        // if(ulist) {ulist.appendChild(lielem);}
        // console.log(task.subTasks);
        // // if (task.subTasks[0]) { 
        // //     console.log('poimal');
        // //     task.subTasks.forEach((element,index)=> {console.log(task);/*task.addSubItem(index,element);*/})//ne rabotaet
        // // }
    }
    save(){
        console.log('saved');
        localStorage.setItem("TODO", JSON.stringify(this.store));
    }
    // addItem(n,subtask){
    //     this.store[n].subTasks.push({
    //         id: subtask.id,
    //         title: subtask.title,
    //         idDone: subtask.idDone
    //     });
    //     let ulist = 
    //     let lielem = document.createElement('li');
    //     lielem.innerHTML = `<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${subtask.title}</p><button style="display:inline-block" class="del"> -</button>`;
    //     console.log(lielem.firstChild);
    //     if (subtask.isDone) {lielem.firstChild.checked=true;}
    //     if(ulist) {ulist.appendChild(lielem);}
    // }
    getItems (){
        if (localStorage.getItem("TODO")) {
        let returnObj = JSON.parse(localStorage.getItem("TODO"));
        returnObj.forEach(element => {
            if (element.date) {
                this.store.push(new TaskItemTime(element.title, element.date, element.id, element.isDone));
            } else 
            {
                this.store.push(new TaskItem(element.title, element.id, element.isDone, element.subTasks));
            }
            // console.log(element);
            // this.addItem(element);

            // const ulist = document.getElementById('list');
            // let lielem = document.createElement('li');
            // lielem.innerHTML = `<li><input type="checkbox" style="display: inline-block"><p style="display:inline-block">${element.title}</p><i style="display:inline-block" class="delete"></i></li>`;
            // if(ulist) {ulist.appendChild(lielem);}
        
        });
        } 
    }
    deleteItem(i){
        this.store.splice(i,1);
        this.save();
    }
    deleteDone(){
        for (let i=this.store.length-1;i>=0;i--){
            if (this.store[i].isDone===true) {this.deleteItem(i);console.log('udoli');}
        }
        this.save();

    }
    // editItem (){

    // }

}