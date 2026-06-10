let Button = document.getElementById("color-mode-button");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    Button.textContent = "Dark mode";
} else {
    document.body.classList.add("dark-mode");
    Button.textContent = "Light mode";
}

function toggleColorMode(event) {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.replace("dark-mode", "light-mode");
        Button.textContent = "Dark mode";
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.replace("light-mode", "dark-mode");
        Button.textContent = "Light mode";
        localStorage.setItem("theme", "dark");
    }
    console.log("event =", event);
}

Button.addEventListener("click", toggleColorMode);
