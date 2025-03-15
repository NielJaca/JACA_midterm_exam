// Task list to act as the database
let tasks = [];
let taskIdCounter = 1;

// Function to create a new task
function addTask(name, description) {
    const task = {
        id: taskIdCounter++,
        name,
        description
    };
    tasks.push(task);
    return task;
}

// Function to read all tasks
function viewTasks() {
    return tasks;
}

// Function to update a task by ID
function updateTask(id, updatedName, updatedDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = updatedName;
        task.description = updatedDescription;
        return task;
    } else {
        return `Task with ID ${id} not found.`;
    }
}

// Function to delete a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const removedTask = tasks.splice(index, 1);
        return removedTask[0];
    } else {
        return `Task with ID ${id} not found.`;
    }
}

// Example usage
console.log(addTask("Buy groceries", "Purchase vegetables, fruits, and milk."));
console.log(addTask("Study JavaScript", "Learn about closures and promises."));

console.log("All Tasks:", viewTasks());

console.log(updateTask(1, "Buy weekly groceries", "Add snacks to the list."));
console.log("All Tasks after update:", viewTasks());

console.log(deleteTask(2));
console.log("All Tasks after deletion:", viewTasks());
