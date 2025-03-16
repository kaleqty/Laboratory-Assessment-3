document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Load saved tasks
    const renderTasks = () => {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${task.text} 
                <button class="edit-btn" onclick="editTask(${index})">✏️</button>
                <button class="delete-btn" onclick="deleteTask(${index})">❌</button>
            `;
            taskList.appendChild(li);
        });
    };

    // Add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push({ text: taskText });
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
            taskInput.value = "";
        }
    };

    // Edit a task
    window.editTask = (index) => {
        const newTask = prompt("Edit your task:", tasks[index].text);
        if (newTask !== null) {
            tasks[index].text = newTask;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        }
    };

    // Delete a task
    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    };

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });

    renderTasks(); // Render tasks on load
});
