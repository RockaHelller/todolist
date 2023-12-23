const todoForm = document.querySelector("form");
const todoList = document.querySelector("ul");

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.querySelector('input[type="text"]');
    const inputValue = input.value;
    console.log(inputValue);
    const newTask = document.createElement("li");
    const taskTitle = document.createElement("p");
    taskTitle.innerText = inputValue;
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-check tick";
    icon.addEventListener("click", function () {
        todoList.removeChild(newTask);
    });
    newTask.appendChild(taskTitle);
    newTask.appendChild(icon);
    todoList.appendChild(newTask);
    input.value = "";
});
