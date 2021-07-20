const toDosButton = document.querySelector("#liveToastBtn");
const toDosCloseButton = document.querySelector("#closeToastBtn");



function DisplayTodo() {
    $('.toast').toast('show');}

function CloseTodo() {
    $('.toast').toast('hide');
}

toDosButton.addEventListener("mousedown", DisplayTodo);
toDosCloseButton.addEventListener("mousedown", CloseTodo);

