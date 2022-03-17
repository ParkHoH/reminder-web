'use strict';

const images = ['0.jpg', '1.jpg', '2.jpg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImages = `url('./img/${chosenImage}')`;
document.body.style.backgroundImage = bgImages;