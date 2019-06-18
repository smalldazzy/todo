function idgen(){
    return Math.floor(Math.random()*100);
}
export default class TaskItem {
    constructor (title,id = idgen(),isDone = false,subTasks=[]){    
        this.title=title;
        this.id=id; 
        this.isDone=isDone;
        this.subTasks=subTasks;
    }
    switch (){
        this.isDone=!this.isDone;
    }
    addSubItem(subtask){
        this.subTasks.push({
            title: subtask.title,
            id: subtask.id,
            isDone: subtask.isDone
        });
        // let lielem = document.createElement('li');
        // let ulist = document.getElementById(`${this.id}`);
        // lielem.innerHTML = `<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${subtask.title}</p><button style="display:inline-block" class="del"> -</button>`;
        // console.log(lielem.firstChild);
        // console.log('its alive');
        // if (subtask.isDone) {lielem.firstChild.checked=true;}
        // if(ulist) {ulist.appendChild(lielem);}
    }
}
