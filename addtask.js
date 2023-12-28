
document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        document.getElementById('task').innerHTML = savedTasks;

        // Reattach delete and check functions to icons
        attachIconFunctions();
    }
});

let add = document.getElementById('addbtn');
add.addEventListener('click', () => {
    let p = document.getElementById('inp').value;
    document.getElementById('inp').value = "";
    if (p == "") {
        alert("Add a Valid task");
    } else {
        let ele = document.createElement('li');
        let div = document.createElement('div');
        let icon1 = document.createElement("i");
        let icon2 = document.createElement("i");
        ele.textContent = p;
        icon1.style.color = "red";
        icon2.style.color = "green";
        icon1.classList.add("fa", "fa-times");
        icon2.classList.add("fa", "fa-check");
        div.appendChild(icon1);
        div.appendChild(icon2);
        ele.appendChild(div);
        document.getElementById('task').appendChild(ele);
        ele.classList.add("alltasks");

        icon1.addEventListener('click', () => {
            document.getElementById('task').removeChild(ele);
            saveTasksToLocalStorage(); // Save updated tasks to local storage
            attachIconFunctions(); // Reattach delete and check functions to icons
        });

        // icon2.addEventListener('click', () => {
        //     // Your logic for completing a task (if needed)
        // });

        icon2.addEventListener('click', () => {
            // Your logic for completing a task (if needed)
            ele.classList.add('completed-task'); // Add a class to change the style
            saveTasksToLocalStorage(); // Save updated tasks to local storage
        });
        

        saveTasksToLocalStorage(); // Save new task to local storage
        attachIconFunctions(); // Attach delete and check functions to icons
    }
});

document.getElementById('dele').addEventListener('click', () => {
    let ch = document.getElementById("task");
    ch.replaceChildren();
    localStorage.removeItem('tasks'); // Clear tasks from local storage
});

function saveTasksToLocalStorage() {
    const tasks = document.getElementById('task').innerHTML;
    localStorage.setItem('tasks', tasks);
}

function attachIconFunctions() {
    // Attach delete and check functions to icons
    document.querySelectorAll('.fa-times').forEach(icon => {
        icon.addEventListener('click', () => {
            const ele = icon.closest('li');
            document.getElementById('task').removeChild(ele);
            saveTasksToLocalStorage(); // Save updated tasks to local storage
            attachIconFunctions(); // Reattach delete and check functions to icons
        });
    });

    document.querySelectorAll('.fa-check').forEach(icon => {
        icon.addEventListener('click', () => {
            // Your logic for completing a task (if needed)
        });
    });
}
