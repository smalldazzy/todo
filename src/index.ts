class ToDo {
    constructor (){
            this.store=[];
       };

    addItem (task){
        this.store.push({
            id: task.id, 
            title: task.title, 
            isDone:task.isDone,
            subTasks: []
        });
        const ulist = document.getElementById('list');
        let lielem = document.createElement('li');
        lielem.innerHTML = `<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${task.title}</p><button style="display:inline-block" class="del"> -</button>`
        +'<button class="addsub">+</button>';
        // console.log(lielem.firstChild);
        if (task.isDone) {lielem.firstChild.checked=true;}
        if(ulist) {ulist.appendChild(lielem);}
        console.log(task.subTasks);
        if (task.subTasks[0]) { 
            console.log('poimal');
            task.subTasks.forEach((element,index)=> {console.log(task);console.log('govno');/*task.addSubItem(index,element);*/})//ne rabotaet
        }
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
        // console.log(returnObj);
        returnObj.forEach(element => {
            // console.log(element);
            this.addItem(element);

            // const ulist = document.getElementById('list');
            // let lielem = document.createElement('li');
            // lielem.innerHTML = `<li><input type="checkbox" style="display: inline-block"><p style="display:inline-block">${element.title}</p><i style="display:inline-block" class="delete"></i></li>`;
            // if(ulist) {ulist.appendChild(lielem);}
        
        });
        }
    }
    deleteItem(i){
        this.store.splice(i,1);
    }
    deleteDone(){
        // this.store.forEach((element,index) =>{
        //     if (element.isDone===true) {this.deleteItem(index);console.log('udoli');}
        // });
        for (let i=this.store.length-1;i>=0;i--){
            if (this.store[i].isDone===true) {this.deleteItem(i);console.log('udoli');}
        }
        localStorage.setItem("TODO", JSON.stringify(list.store));

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
        addSubItem(n,subtask){
            this.subTasks.push({
                id: subtask.id,
                title: subtask.title,
                idDone: subtask.idDone
            });
            let lielem = document.createElement('li');
            let ulist = document.getElementById(`${this.id}`);
            lielem.innerHTML = `<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${subtask.title}</p><button style="display:inline-block" class="del"> -</button>`;
            console.log(lielem.firstChild);
            console.log('its alive');
            if (subtask.isDone) {lielem.firstChild.checked=true;}
            if(ulist) {ulist.appendChild(lielem);}
        }
}

class SubTaskItem extends TaskItem {
    constructor (id,title){
        super();
        this.id=id;
        this.title=title;
        this.master='master';
    }
}
let list = new ToDo();
// let task1 = new TaskItem(1,'perviy');
// let task2 = new TaskItem(2,'vtoroy');
// list.addItem(task1);
// list.addItem(task2);
// console.log(list);

window.onload=function(){
    list.getItems();
    const submit = document.getElementById('submit');
    const field = document.getElementById('inp');
    const del = document.getElementsByClassName('del');
    const deldone = document.getElementById('clear');
    const addsub = document.getElementsByClassName('addsub');
    
    for (let i=0;i<addsub.length;i++){
        addsub[i].addEventListener('click',()=>{
            let sublist = document.createElement('ul');
            let subtask =  new SubTaskItem(Math.floor(Math.random()*100),'subtasktest');
            sublist.innerHTML=`<li><input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${subtask.title}</p></li>`
            event.target.parentNode.appendChild(sublist);
            list.store[i].subTasks.push({id:subtask.id,title:subtask.title,isDone:false});
            //list.addSub(i,subtask);
            localStorage.setItem("TODO", JSON.stringify(list.store));
            // console.log(event.target.parentNode);
            // console.log(list.store);
        });
    }

    deldone.addEventListener('click',()=>{
        list.deleteDone();
        location.reload();
    });

    submit.addEventListener('click', function (){
        console.log(field.value);
        let task2=new TaskItem(Math.floor(Math.random()*100),field.value);
        list.addItem(task2);
        // list.getItems(ulist);
        // console.log(list.store);
        localStorage.setItem("TODO", JSON.stringify(list.store));
        location.reload();//cures initial empty checkbox, clears inputbox

    });
    let check = document.getElementsByClassName('check');
    console.log(check);

    //add event bubbling
    for (let i=0;i<check.length;i++){
        //arrow func
        check[i].addEventListener('change', function(){
            if (this.checked) {
                console.log(list.store[i]);
                console.log('ruki uberi');
                list.store[i].isDone=true;
                localStorage.setItem("TODO", JSON.stringify(list.store));
            } else {
                list.store[i].isDone=false;
                localStorage.setItem("TODO", JSON.stringify(list.store));
            }
        })
    }

    for (let i=0;i<del.length;i++){
        //arrow func
        del[i].addEventListener('click', function (){
            list.deleteItem(i);
            localStorage.setItem("TODO", JSON.stringify(list.store));
            location.reload(); //bad way

        })
    }
    const ulist = document.getElementById('list');
    

    
}



