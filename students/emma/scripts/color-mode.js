const button = document.getElementById("color-button");

function toggleColorMode(event) {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.replace("dark-mode", "light-mode");

  } else {
    document.body.classList.replace("light-mode", "dark-mode");
  }
  console.log("event =", event);
}
button.addEventListener("click", toggleColorMode);