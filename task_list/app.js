const input = document.querySelector('#task');
const addTask = document.querySelector('#task-form .btn');
const taskList = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-tasks');
filter = document.getElementById('filter');

loadEvents();

function loadEvents() {

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
        input.value = '';
        e.preventDefault();
    }); 
}


function removeItem() {
    taskList.addEventListener('click', function(e) {
        if(e.target.parentNode.classList.contains('delete-item')) {
            e.target.parentNode.parentNode.remove();
        }
    });
}

function clearTasks() {
    clearBtn.addEventListener('click', function(){
        while(taskList.childNodes.length != 0) {
            taskList.removeChild(taskList.childNodes[0]);
        }
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