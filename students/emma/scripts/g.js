/*
*HTML element
*/
const gCanvas = document.getElementById("graffiti");
const surface = gCanvas.getContext("2d");
const cbutton = document.getElementById("clean");
const colinput = document.getElementById("colinput");
const siinput = document.getElementById("siinput");



surface.lineJoin = "round";
//surface.strokeStyle = "gray"
console.log(colinput.value);
function changeColor(){
surface.strokeStyle=colinput.value;
}
changeColor();
colinput.addEventListener("change", changeColor);

function changeSize(){
surface.lineWidth=siinput.value;
}
changeSize();
siinput.addEventListener("change", changeSize);
/*
*shapes
*/
function shapes(){
    surface.rect(150, 200, 100, 100);
    surface.stroke();

    surface.beginPath();
    surface.moveTo(200, 50);
    surface.lineTo(150, 200);
    //add 7
    surface.moveTo(250, 50);
    surface.lineTo(350, 50);
    surface.moveTo(350, 50);
    surface.lineTo(270, 300);
    surface.closePath();
    surface.stroke();
}
shapes();

function cCanvas(){
    surface.clearRect(0, 0, 400, 400);
    console.log("clean");
}
cbutton.addEventListener("click", cCanvas);

let oldX = 0;
let oldY = 0;

function g(event){
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y, event.buttons);

    if(event.buttons ===1){
    surface.beginPath();
    surface.moveTo(oldX, oldY);
    surface.lineTo(x, y);
    surface.closePath();
    surface.stroke();
    }
    oldX = x;
    oldY = y;
}
    
gCanvas.addEventListener("mousemove", g);