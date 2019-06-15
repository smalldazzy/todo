class ToDo {
    constructor (){
            this.store=[];
       };

    addItem (task){
        this.store.push({
            id: task.id, 
            title: task.title, 
            isDone:task.isDone
        });
        const ulist = document.getElementById('list');
        let lielem = document.createElement('li');
        lielem.innerHTML = `<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${task.title}</p><i style="display:inline-block" class="delete"></i>`;
        console.log(lielem.firstChild);
        if (task.isDone) {lielem.firstChild.checked=true;}
        if(ulist) {ulist.appendChild(lielem);}
    }
    getItems (){
        if (localStorage.getItem("TODO")) {
        let returnObj = JSON.parse(localStorage.getItem("TODO"));
        console.log(returnObj);
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
// let task1 = new TaskItem(1,'perviy');
// let task2 = new TaskItem(2,'vtoroy');
// list.addItem(task1);
// list.addItem(task2);
// console.log(list);

window.onload=function(){
    list.getItems();
    const submit = document.getElementById('submit');
    const field = document.getElementById('inp');
    submit.addEventListener('click', function (){
        console.log(field.value);
        let task2=new TaskItem(Math.floor(Math.random()*100),field.value);
        list.addItem(task2);
        // list.getItems(ulist);
        console.log(list.store);
        localStorage.setItem("TODO", JSON.stringify(list.store));

    });
    let check = document.getElementsByClassName('check');
    console.log(check);
    for (let i=0;i<check.length;i++){
        check[i].addEventListener('change', function(){
            if (this.checked) {
                console.log('na jebalo najmi');
                console.log(list.store[i]);
                list.store[i].isDone=true;
                localStorage.setItem("TODO", JSON.stringify(list.store));
            } else {
                console.log('molodets');
                list.store[i].isDone=false;
                localStorage.setItem("TODO", JSON.stringify(list.store));
            }
        })
    }
    const ulist = document.getElementById('list');
    

    
}



