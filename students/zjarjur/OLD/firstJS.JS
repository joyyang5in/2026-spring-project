let mode = 0;
const linkElement = document.getElementById('whichSheet');
const light = "./styles/light.css";
const dark = "./style/dark.css";

function changeMode(){
    if (mode == 0){        
        linkElement.setAttribute('href', dark);
        mode = 1;
    } else {
        linkElement.setAttribute('href', light);
        mode = 0;
    }

}

changeMode();