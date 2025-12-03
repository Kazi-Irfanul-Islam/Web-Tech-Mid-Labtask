let textBlock = document.getElementById("textBlock");
let currentFontSize = 18;

function changeBg() {
  const colors = ["#fce4ec", "#e3f2fd", "#e8f5e9", "#fff3e0", "#ede7f6"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  textBlock.style.backgroundColor = randomColor;
}

function increaseFont() {
  currentFontSize += 2;
  textBlock.style.fontSize = currentFontSize + "px";
}

function centerText() {
  textBlock.style.textAlign = "center";
}

function resetStyle() {
  textBlock.style.backgroundColor = "#f7faff";
  textBlock.style.fontSize = "18px";
  textBlock.style.textAlign = "left";
  currentFontSize = 18;
}
