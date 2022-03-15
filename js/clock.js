const clock = document.querySelector('#clock');

function getTime() {
    let date = new Date();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}`;
}

getTime();
setInterval(getTime, 1000);