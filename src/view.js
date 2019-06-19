import ToDo from './ToDo';
import TaskItem from './TaskItem';
import SubTaskItem from './SubTaskItem';
import TaskItemTime from './TaskItemTime';
window.onload=function render(){

    let list = new ToDo();
    list.getItems();
    
    console.log(list);

    // let task3 = new TaskItem('kek');
    // let subtask3 = new SubTaskItem('subkek');
    // task3.addSubItem(subtask3);
    // console.log(task3);
    // let timetask = new TaskItemTime('vremya',1560871996176);
    // console.log(timetask);
    // list.addItem(timetask);
    // list.addItem(task3);
    console.log(list);
    //list.save();
    console.log('render works')
        createItems(list);
    const submit = document.getElementById('submit');
    const field = document.getElementById('inp');
    const del = document.getElementsByClassName('del');
    const deldone = document.getElementById('clear');
    let check = document.getElementsByClassName('check');
    const addsub = document.getElementsByClassName('addsub');
    const delsub = document.getElementsByClassName('delsub');
    const search = document.getElementById('sr');
    console.log(search);

    search.addEventListener('input',()=>{
        console.log('4totoizmenilos');
            createItems(searchim(search.value,list))
        }
        );

    deldone.addEventListener('click',()=>{
        list.deleteDone();
        location.reload();
    });
    for (let i=0;i<del.length;i++){
            //arrow func
            del[i].addEventListener('click', function (){
                list.deleteItem(i);
                location.reload(); //bad way
    
            })
    }

    submit.addEventListener('click', function (){
        // console.log(field.value);
        let task2=new TaskItem(field.value,Math.floor(Math.random()*100));
        list.addItem(task2);
        // list.getItems(ulist);
        // console.log(list.store);
        list.save();
        location.reload();//cures initial empty checkbox, clears inputbox

    });

    // console.log(check);

    //add event bubbling
    for (let i=0;i<check.length;i++){
        //arrow func
        check[i].addEventListener('change', function(){
                list.store[i].switch();
                list.save();
        })
    }
}

    function createItems(list){
        let div = document.getElementsByClassName('todos')[0];
        console.log(div);
        let todolist = document.createElement('ul');
        todolist.setAttribute('class','list');
        //storage 
        // const todos = JSON.parse(localStorage.getItem('TODO')) || [];
        let todos = list.store;
        console.log(todos);
        todos.forEach(todo => {
            let item = document.createElement('li');
            item.setAttribute('class','item');
            item.innerHTML = `<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${todo.title}</p><button style="display:inline-block" class="del"> -</button>`
            +'<button class="addsub">+</button>';
            
            if (todo.subTasks && todo.subTasks.length>0){
                let sublist = document.createElement('ul');
                sublist.setAttribute('class','sublist');
                todo.subTasks.forEach(subtask =>{
                    let subtaskE = document.createElement('li');
                    subtaskE.setAttribute('class','subitem');
                    subtaskE.innerHTML=`<input class="subcheck" type="checkbox" style="display: inline-block"><p style="display:inline-block">${subtask.title}</p><button style="display:inline-block" class="delsub"> -</button>`;
                    sublist.appendChild(subtaskE);
                });
                item.appendChild(sublist);
            }
            if (todo.date){
                let datep = document.createElement('p');
                datep.setAttribute('style','display: inline-block');
                datep.innerHTML=todo.date;
                item.innerHTML=`<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${todo.title}</p><button style="display:inline-block" class="del"> -</button>`;
                item.appendChild(datep);
            }
            if (todo.isDone) {item.firstChild.checked=true;}
            todolist.appendChild(item);
        });
        div.appendChild(todolist);

    }
    
    function searchim(query,list){
        let spis = document.getElementsByClassName('todos')[0];
        spis.innerHTML=' ';
        let newlist = list.store.filter(todo =>
            todo.title.toLowerCase().includes(query.toLowerCase())
            );
            console.log(newlist);
            let filtered = {store:newlist};
        return filtered;

    }


    // for (let i=0;i<addsub.length;i++){
    //     addsub[i].addEventListener('click',()=>{
    //         let sublist = document.createElement('ul');
    //         let subtask =  new SubTaskItem(Math.floor(Math.random()*100),'subtasktest');
    //         sublist.innerHTML=`<li><input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${subtask.title}</p></li>`
    //         event.target.parentNode.appendChild(sublist);
    //         list.store[i].subTasks.push({id:subtask.id,title:subtask.title,isDone:false});
    //         //list.addSub(i,subtask);
    //         localStorage.setItem("TODO", JSON.stringify(list.store));
    //         // console.log(event.target.parentNode);
    //         // console.log(list.store);
    //     });
    // }

    

    
    

    // for (let i=0;i<del.length;i++){
    //     //arrow func
    //     del[i].addEventListener('click', function (){
    //         list.deleteItem(i);
    //         list.save();
    //         location.reload(); //bad way

    //     })
    // }
    // const ulist = document.getElementById('list');
    

    
