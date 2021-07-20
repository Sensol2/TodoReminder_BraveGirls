const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const toDoCount = document.querySelector("#thingsToDo");

const TODOS_KEY = "todos";
const BOOTSTRAP_UL_CLASS = "list-group-item";

let toDos = [];

function countToDos(newTodo) {
    const numOfToDos = newTodo.length;
    toDoCount.innerText = `${numOfToDos}개의 할 일`;
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function loadToDos() {
    const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos != null) {
        const parsedToDo = JSON.parse(savedToDos);
        toDos = parsedToDo;
        toDos.forEach( (item) => paintToDo(item));
        countToDos(toDos);
    }
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
    countToDos(toDos);
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.classList.add(BOOTSTRAP_UL_CLASS)

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "삭제"
    button.style = "float: right";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    saveToDos();
    paintToDo(newTodoObj);
    countToDos(toDos);
}

toDoForm.addEventListener("submit", handleToDoSubmit)
loadToDos();
