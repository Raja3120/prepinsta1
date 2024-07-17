document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const clearCompletedBtn = document.getElementById('clearCompletedBtn');

    addTaskBtn.addEventListener('click', addTask);
    clearCompletedBtn.addEventListener('click', clearCompletedTasks);
    
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            li.addEventListener('click', toggleTaskCompletion);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function toggleTaskCompletion(event) {
        event.target.classList.toggle('completed');
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll('.completed');
        completedTasks.forEach(task => task.remove());
    }
});
