const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
];

function bgImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber + 1}.jpg`;
  image.classList.add("bgimg");
  document.body.appendChild(image);
}

function chosenImage() {
  const number = Math.floor(Math.random() * images.length);
  return number;
};

function init() {
  const randomNumber = chosenImage();
  bgImage(randomNumber);
};

init();