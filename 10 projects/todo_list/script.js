const input = document.querySelector('#task');
const addTask = document.querySelector('button');

addTask.addEventListener('click', updateTask);

// adds and removes task from the todo list scheduler via the updatetask function
function updateTask() {
    if(input.value === "" || input.value === null){
        alert('please enter a task');
    }else{
        // add tasks to the todolist
        const taskList = document.querySelector('.task-list');
        const newTask =  document.createElement('div');
        newTask.classList.add('new-task');
        newTask.innerHTML =`<span class="input-value">${input.value.trim()}</span>
                            <span class="btn"><i class="fa-solid fa-trash"></i></span>`
        taskList.appendChild(newTask);

        // reset input field
        input.value = "";

        // remove task from the todo list
        const removeTasks = newTask.querySelector('.btn');
        removeTasks.addEventListener('click', () => {
            newTask.remove();
        
        })
    }
}

// remove all item fron the to list
const reset = document.querySelector('.reset');
reset.addEventListener("click", clearTaskList)

// clears all task on the todo list via clearTaskList function
function clearTaskList() {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = "";
}


