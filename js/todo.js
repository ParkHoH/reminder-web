const toDoForm = document.querySelector('#todo_form');
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('#todo_list');

let toDoes = [];
const toDoesKey = 'toDoes';

function saveToDoes() {
    localStorage.setItem(toDoesKey, JSON.stringify(toDoes));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDoes = toDoes.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDoes();
}

function paintToDo(newToDo) {
    const li = document.createElement('li');
    li.id = newToDo.id;
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteToDo);
    span.innerText = newToDo.text;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    saveToDoes();
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        id: Date.now(),
        text: newToDo,
    };
    toDoes.push(newToDoObj);
    paintToDo(newToDoObj);
}

toDoForm.addEventListener('submit', handleTodoSubmit);

const savedToDoes = localStorage.getItem(toDoesKey);
if (saveToDoes) {
    const parseSavedToDoes = JSON.parse(savedToDoes);
    toDoes = parseSavedToDoes;
    parseSavedToDoes.forEach(paintToDo);
}