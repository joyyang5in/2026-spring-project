let mode = 0;
const linkElement = document.getElementById('whichSheet');
const light = "";
const dark = "dark.css";

function changeMode(){
    if (mode == 0){        
        linkElement.setAttribute('href', "");
        mode = 1;
    } else {
        linkElement.setAttribute('href', light);
        mode = 0;
    }

}