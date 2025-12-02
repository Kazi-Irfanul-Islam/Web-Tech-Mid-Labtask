let images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
  "https://images.unsplash.com/photo-1519817914152-22d216bb9170",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090",
];

let index = 0;

let sliderImage = document.getElementById("sliderImage");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

function updateImage() {
  sliderImage.src = images[index];
}

nextBtn.addEventListener("click", function () {
  index = (index + 1) % images.length;
  updateImage();
});

prevBtn.addEventListener("click", function () {
  index = (index - 1 + images.length) % images.length;
  updateImage();
});

setInterval(function () {
  index = (index + 1) % images.length;
  updateImage();
}, 3000);

updateImage();
