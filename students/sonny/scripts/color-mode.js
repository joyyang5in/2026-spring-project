const button = document.getElementById("color-mode-button");
function toggleColorMode(event) {
    console.log(document.body.classList.contains("dark-mode"))
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Dark mode";
        document.body.classList.replace("dark-mode", "light-mode");
    } else {
        button.textContent = "Light mode";
        document.body.classList.replace("light-mode", "dark-mode");
    }
    console.log("event =", event);
};
// Run our function when the button is clicked.
button.addEventListener("click", toggleColorMode);