import ToDo from './ToDo';
import TaskItem from './TaskItem';
import SubTaskItem from './SubTaskItem';
import TaskItemTime from './TaskItemTime';
window.onload = function render() {

    let list = new ToDo();
    list.getItems();
    createItems(list);
    const submit = document.getElementById('submit');
    const field = document.getElementById('inp');
    const del = document.getElementsByClassName('del');
    const deldone = document.getElementById('clear');
    let check = document.getElementsByClassName('check');
    const addsub = document.getElementsByClassName('addsub');
    const delsub = document.getElementsByClassName('delsub');
    const search = document.getElementById('sr');
    const subcheck = document.getElementsByClassName('subcheck');
    const stime = document.getElementById('stime');
    search.addEventListener('input', () => {
        createItems(searchim(search.value, list))
    }
    );

    deldone.addEventListener('click', () => {
        list.deleteDone();
        location.reload();
    });

    for (let i = 0; i < delsub.length; i++) {
        delsub[i].addEventListener('click', function () {
            list.store.forEach((todo, index1) => {
                if (todo.subTasks && todo.subTasks.length > 0) {
                    todo.subTasks.forEach((subtask, index2) => {
                        if (subtask.id == Number(event.target.parentNode.firstChild.getAttribute('id'))) {
                            list.store[index1].subTasks.splice(index2, 1);
                            list.save();
                            location.reload();
                        }
                    });
                }
            })
        })
    }
    for (let i = 0; i < del.length; i++) {
        //arrow func
        del[i].addEventListener('click', function () {
            list.deleteItem(i);
            location.reload(); //bad way

        })
    }

    submit.addEventListener('click', function () {
        let task2 = new TaskItem(field.value, Math.floor(Math.random() * 100));
        list.addItem(task2);
        list.save();
        location.reload();//cures initial empty checkbox, clears inputbox

    });

    stime.addEventListener('click', function () {
        let tdate = Number(prompt('Enter finish date'));
        let task2 = new TaskItemTime(field.value, tdate);
        list.addItem(task2);
        list.save();
        location.reload();//cures initial empty checkbox, clears inputbox

    });


    //add event bubbling
    for (let i = 0; i < check.length; i++) {
        //arrow func
        check[i].addEventListener('change', function () {
            list.store[i].switch();
            list.save();
        })
    }
    for (let i = 0; i < subcheck.length; i++) {
        //arrow func
        subcheck[i].addEventListener('change', function () {
            list.store.forEach(todo => {
                if (todo.subTasks && todo.subTasks.length > 0) {
                    todo.subTasks.forEach(subtask => {
                        if (subtask.id === Number(subcheck[i].getAttribute('id'))) {
                            subtask.isDone = !subtask.isDone;
                            list.save();
                        }
                    });
                }
            })
        });
    }

    for (let i = 0; i < addsub.length; i++) {
        addsub[i].addEventListener('click', () => {
            let taskname = prompt('Enter subtask name');
            let sublist = addsub[i].nextElementSibling || document.createElement('ul');
            sublist.setAttribute('class', 'sublist list-group');
            let subtask = new SubTaskItem(taskname);
            sublist.innerHTML = `<li class='list-group-item'><input id='${subtask.id}' class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${subtask.title}</p></li>`
            event.target.parentNode.appendChild(sublist);
            list.store.forEach(task => {
                if (('_' + task.id) == event.target.getAttribute('id')) {
                    task.subTasks.push({ id: subtask.id, title: subtask.title, isDone: false });
                }
            });
            list.save();
            location.reload();

        });
    }

}

function createItems(list) {
    let div = document.getElementsByClassName('todos')[0];
    let todolist = document.createElement('ul');
    todolist.setAttribute('class', 'list list-group list-group-flush');
    let todos = list.store;
    todos.forEach(todo => {
        let item = document.createElement('li');
        item.setAttribute('class', 'item list-group-item');
        item.innerHTML = `<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${todo.title}</p><button style="display:inline-block" class="del btn btn-danger btn-sm"> -</button>`
            + `<button id='_${todo.id}' class="addsub btn btn-success btn-sm">+</button>`;

        if (todo.subTasks && todo.subTasks.length > 0) {
            let sublist = document.createElement('ul');
            sublist.setAttribute('class', 'sublist list-group list-group-flush');
            todo.subTasks.forEach(subtask => {
                let subtaskE = document.createElement('li');
                subtaskE.setAttribute('class', 'subitem list-group-item');
                subtaskE.innerHTML = `<input class="subcheck" id='${subtask.id}' type="checkbox" style="display: inline-block"><p style="display:inline-block">${subtask.title}</p><button style="display:inline-block margin: 10px" class="delsub btn btn-danger btn-sm"> -</button>`;
                sublist.appendChild(subtaskE);
                if (subtask.isDone) { subtaskE.firstChild.checked = true; }
            });
            item.appendChild(sublist);
        }
        if (todo.date) {
            let datep = document.createElement('p');
            datep.setAttribute('style', 'display: inline-block');
            let taskdate = +new Date(todo.date);
            let delta = taskdate - (+new Date());
            if (delta > 0) {
                datep.innerHTML = `remaining ${(delta / 86400000).toFixed(3)} days`;
            } else {
                datep.innerHTML = 'expired';
            }

            item.innerHTML = `<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">${todo.title}</p><button style="display:inline-block" class="del btn btn-danger btn-sm"> -</button>`;
            item.appendChild(datep);
        }
        if (todo.isDone) { item.firstChild.checked = true; }
        todolist.appendChild(item);
    });
    div.appendChild(todolist);

}

function searchim(query, list) {
    let spis = document.getElementsByClassName('todos')[0];
    spis.innerHTML = ' ';
    let newlist = list.store.filter(todo =>
        todo.title.toLowerCase().includes(query.toLowerCase())
    );
    let filtered = { store: newlist };
    return filtered;

}


