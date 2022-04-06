'use strict';

const weatherContainer = document.querySelector('#weather');
const temperature = weatherContainer.querySelector('div:first-child');
const weather = weatherContainer.querySelector('div:nth-child(2)');

const API_KEY = "85b9ae667cf36b9f2d24bf29f3e6653a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // city.innerText = data.name;
            const weatherIconImg = document.querySelector(".weather-icon");
            const weatherIcon = data.weather[0].icon;
            const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            console.log(weatherIconUrl);
            
            weatherIconImg.setAttribute("src", weatherIconUrl);
            temperature.innerText = `${Math.floor(data.main.temp)}°`;
            weather.innerText = `${data.weather[0].main}`;
        })
}

function onGeoError() {
    city.innerText = "'내 위치 확인'을 허용해주세요!";
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);