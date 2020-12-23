const input = document.querySelector('#task');
const addTask = document.querySelector('#task-form .btn');
const taskList = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const myStorage = window.localStorage;

loadEvents();

function loadEvents() {

    loadFromLoaclStorage();
    addTasktoTasks();
    removeItem();
    clearTasks();
    filterTasks();
}


function addTasktoTasks() {
    addTask.addEventListener('click', function(e){
        const li = document.createElement('li');
        const link = document.createElement('a');
        li.className = 'collection-item';
        li.textContent = input.value;
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
        addToLocalStorage(input.value);
        input.value = '';
        e.preventDefault();
    }); 
}


function removeItem() {
    taskList.addEventListener('click', function(e) {
        if(e.target.parentNode.classList.contains('delete-item')) {
            e.target.parentNode.parentNode.remove();
            removeFromLocalStorage(e.target.parentNode.parentNode.textContent);
        }
    });
}

function clearTasks() {
    clearBtn.addEventListener('click', function(){
        while(taskList.childNodes.length != 0) {
            taskList.removeChild(taskList.childNodes[0]);
        }
        clearLoaclStorage();
    });
}

function filterTasks() {
    filter.addEventListener('keyup', function(e) {
        taskList.childNodes.forEach(function(li){
            if(li.textContent.includes(e.target.value)) {
                li.style.display = 'block';
            }else {
                li.style.display = 'none';
            }
        });
    });
}

// ------------------------------- local storage  -----------------------------

function addToLocalStorage(el) {
    let li_list;
    
    if(localStorage.getItem('lis') === null) {
        li_list = [];
        li_list.push(el);
        localStorage.setItem('lis', JSON.stringify(li_list));
    }else {

        li_list = JSON.parse(localStorage.getItem('lis'));
        li_list.push(el);
        localStorage.setItem('lis', JSON.stringify(li_list));
        
    }
}

function loadFromLoaclStorage() {
    if(localStorage.getItem('lis') !== null){
        let li_list;
        li_list = JSON.parse(localStorage.getItem('lis'));
        li_list.forEach(function(li){
            const myli = document.createElement('li');
            const link = document.createElement('a');
            myli.className = 'collection-item';
            myli.textContent = li;
            link.className = 'delete-item secondary-content';
            link.innerHTML = '<i class="fa fa-remove"></i>';
            myli.appendChild(link);
            taskList.appendChild(myli);
        });
    }
}


function removeFromLocalStorage(el) {
    let li_list;
    li_list = JSON.parse(localStorage.getItem('lis'));
    li_list.forEach(function(li, index){
        if(li === el){
            li_list.splice(index, 1);
            localStorage.setItem('lis', JSON.stringify(li_list));
        }
    });
}

function clearLoaclStorage() {
    localStorage.clear();
}