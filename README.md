## JavaScript Features Used

### 1 **ES6+ Features**
**Arrow Functions (`=>`)** - Used for concise function expressions.
```js
const addTask = () => console.log("Task added");
```
**Template Literals** - Used for dynamic HTML string creation.
```js
taskList.innerHTML += `<li>${taskName} <button class='delete-btn'>Delete</button></li>`;
```
**`const` and `let`** - Used for block-scoped variable declarations.
```js
const taskList = document.querySelector("#task-list");
let tasks = [];
```
**Spread Operator (`...`)** - Used to copy arrays easily.
```js
let newTasks = [...tasks, "New Task"];
```
**Array Methods (`map`, `filter`, `forEach`)** - Used for modifying task lists efficiently.
```js
const updatedTasks = tasks.filter(task => task.id !== taskId);
```

---

### 2 **DOM Manipulation**
**Querying Elements** - Selecting elements dynamically.
```js
const inputField = document.querySelector("#task-input");
```
**Creating Elements** - Dynamically adding tasks.
```js
const taskItem = document.createElement("li");
taskItem.textContent = taskName;
taskList.appendChild(taskItem);
```
**Event Listeners** - Handling user interactions.
```js
document.querySelector("#add-task").addEventListener("click", addTask);
```

---

### 3 **Asynchronous Programming**
**Using `setTimeout()`** to create a delay before removing tasks visually.
```js
setTimeout(() => taskItem.remove(), 500);
```

---

### 4 **LocalStorage for Persistent Data**
**Saving Tasks to `localStorage`**
```js
localStorage.setItem("tasks", JSON.stringify(tasks));
```
**Retrieving Tasks from `localStorage`**
```js
const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
```
**Removing Tasks from `localStorage`**
```js
localStorage.removeItem("tasks");
```

![My Portfolio - Google Chrome 16_03_2025 8_38_10 pm](https://github.com/user-attachments/assets/d69a73cf-6ff5-4f65-a2d4-6b1e08ca831a)
**Enter a task and click the "Add task" button to save it**


![My Portfolio - Google Chrome 16_03_2025 8_38_42 pm](https://github.com/user-attachments/assets/a68dabf2-7609-46a6-881a-bfd3f915923e)
**Click the "pencil" button to edit a task and click "ok" to save it**



![My Portfolio - Google Chrome 16_03_2025 8_38_53 pm](https://github.com/user-attachments/assets/f3af62e2-fb52-4278-903e-694000277c6b)
**Click the "X" button to delete a task**



