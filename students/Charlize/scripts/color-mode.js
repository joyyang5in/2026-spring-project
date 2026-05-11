let Button =document.getElementById("color-mode-button");
function toggleColorMode(event){
if(document.body.classList.contains("dark-mode")){
    document.body.classList.replace("dark-mode", "light-mode")
   Button.textContent = "Dark mode";
}else{
   
    document.body.classList.replace("light-mode","dark-mode")
   Button.textContent = "Light mode";
}
console.log("event =", event);

}
Button.addEventListener("click", toggleColorMode);