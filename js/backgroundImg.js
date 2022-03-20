'use strict';

const images = ['0.jpg', '1.jpg', '2.jpg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImageContainer = document.querySelector('.backgroud');
const bgImage = document.createElement('img');

// bgImage.src = `img/${chosenImage}'`;
bgImage.src = `img/${chosenImage}`;
bgImageContainer.appendChild(bgImage);