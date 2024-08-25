document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    function addTask() {
        if (newTaskInput.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = newTaskInput.value;

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '✖';
            deleteBtn.classList.add('delete-btn');
            li.appendChild(deleteBtn);

            // Append the new task to the list
            todoList.appendChild(li);

            // Add event listener to delete button
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });

            // Clear the input field
            newTaskInput.value = '';
        }
    }

    // Add task when the button is clicked
    addTaskBtn.addEventListener('click', addTask);

    // Add task when the Enter key is pressed
    newTaskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
