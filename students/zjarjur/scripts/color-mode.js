let button = document.getElementById("color-mode-button");


function toggleColorMode(event) {
    if (document.body.classList.contains("dark-mode")){
        button.textContent = "Dark Mode";
        document.body.classList.replace("dark-mode", "light-mode");
    }else{
        button.textContent = "Light Mode";
        document.body.classList.replace("light-mode", "dark-mode");
    }
    console.log("event = ", event);

}



button.addEventListener("click", toggleColorMode);

