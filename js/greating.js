const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = 'userName';
const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting();
}

function paintGreeting() {
    userName = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${userName}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting();
}

