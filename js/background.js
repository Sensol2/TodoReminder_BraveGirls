// const images = [
//     "0.jpg",
//     "1.jpg",
//     "2.jpg",
//     "3.jpg"
// ];

// const choseImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${choseImage}`;
// document.body.appendChild(bgImage);

const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const choseImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.querySelector("#bgImg");
bgImage.style.backgroundImage  = "url(" + `img/${choseImage}`+ ")";