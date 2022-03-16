const weatherContainer = document.querySelector('#weather');
const city = weatherContainer.querySelector('div:first-child');
const weather = weatherContainer.querySelector('div:last-child');

const API_KEY = "85b9ae667cf36b9f2d24bf29f3e6653a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].description} / ${data.main.temp}`;
        })
}

function onGeoError() {
    city.innerText = 'Check weather API key.'
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);