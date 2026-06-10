/*
*HTML element
*/
const gCanvas = document.getElementById("graffiti");
const surface = gCanvas.getContext("2d");
//const cbutton = document.getElementById("clean");
const colinput = document.getElementById("colinput");
const siinput = document.getElementById("siinput");
const tselect = document.getElementById("tselect");
console.log(tselect)

surface.lineJoin = "round";
//surface.strokeStyle = "gray"
console.log(colinput.value);
function changeColor(){
surface.strokeStyle=colinput.value;
}
changeColor();
colinput.addEventListener("change", changeColor);

let tool;
function changeTool(){
tool=tselect.value;
console.log(tool);
}
changeTool();
tselect.addEventListener("change", changeTool);

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

//function cCanvas(){
//    surface.clearRect(0, 0, 400, 400);
//    console.log("clean");
//}
//cbutton.addEventListener("click", cCanvas);

let oldX = 0;
let oldY = 0;

function g(event){
    const x = event.offsetX;
    const y = event.offsetY;
    

    if(event.buttons > 0){
        console.log(x, y, tool);
        if(tool ==="eraser"){
            const width = siinput.value;
            surface.clearRect(x - (width / 2), y - (width / 2), width, width);
        }else{

    surface.beginPath();
    surface.moveTo(oldX, oldY);
    surface.lineTo(x, y);
    surface.closePath();
    surface.stroke();
        }
    }
    oldX = x;
    oldY = y;
}
    
gCanvas.addEventListener("mousemove", g);
