const input = document.querySelector('#task');
const addTask = document.querySelector('#task-form .btn');
const taskList = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-tasks');

loadEvents();

function loadEvents() {

    addTasktoTasks();
    removeItem();
    clearTasks();

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