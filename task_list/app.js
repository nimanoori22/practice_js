const input = document.querySelector('#task');
const addTask = document.querySelector('#task-form .btn');
const taskList = document.querySelector('.collection');

loadEvents();

function loadEvents() {

    addTasktoTasks();


}


function addTasktoTasks() {
    addTask.addEventListener('click', function(e){
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.textContent = input.value;
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
        input.value = '';
        e.preventDefault();
    }); 
}