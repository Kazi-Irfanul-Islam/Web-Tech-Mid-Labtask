let currentTheme = "light";

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", function () {
  if (currentTheme === "light") {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    toggleBtn.innerText = "Switch to Light Mode";
    currentTheme = "dark";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    toggleBtn.innerText = "Switch to Dark Mode";
    currentTheme = "light";
  }
});
