
const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const alertMassage = document.getElementById("alert-massage");
console.log(alertMassage)

const todos = []

const showAlert =(massage, type) => {
    // alertMassage.innerHTML = "";
    const alert = document.createElement("p");
    alert.innerText = massage;
    alert.classList.add("alert");
    alert.classList.add(`alert-${type}`);
    alertMassage.append(alert);
};

const addHandler = () => {
    const task = taskInput.value;
    const date = dateInput.value;
    const todo = {
        task : task,
        date : date,
        completed : false,
    };

    if (task){
        todos.push(todo);
        taskInput.value = "";
        dateInput.value = "";
        console.log(todos);
        showAlert("to do added successfully","seccess");
    } else {
        showAlert ("please enter a todo", "error");
    }
}


addButton.addEventListener("click", addHandler)