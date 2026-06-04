/*
* HTML Elements
*/
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const cleanButton = document.getElementById("clean");
const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("size-input");

/*
*  Graffiti Styles
*/
surface.lineWidth = sizeInput.value;
surface.lineJoin = "round";
surface.strokeStyle = colorInput.value;




/*
* Shapes
*/

function shapes() {
    surface.rect(150, 200, 100, 100);
    surface.stroke();
    surface.beginPath();
    surface.moveTo(200, 50);
    surface.lineTo(150, 200);
    surface.moveTo(250, 50);
    surface.lineTo(350, 50);
    surface.lineTo(300, 300);
    surface.stroke();

}

shapes();

/*
* Clean Up
*/

function cleanCanvas() {
    surface.clearRect(0, 0, 400, 400);
    console.log("Clean");
}

cleanButton.addEventListener("click", cleanCanvas);


/*
* Graffiti
*/
let oldX = 0;
let oldY = 0;

function changeColor() {
    surface.strokeStyle = colorInput.value;

}

function changeSize() {
   
    surface.lineWidth = sizeInput.value;
}

function graffiti(event) {

    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y, event.buttons);
    

    if (event.buttons > 0) {
        surface.beginPath();
        surface.moveTo(oldX, oldY);
        surface.lineTo(x, y);
        surface.closePath();
        surface.stroke();
    }

    oldX = x;
    oldY = y;

}

graffitiCanvas.addEventListener("mousemove", graffiti);
colorInput.addEventListener("change", changeColor);
sizeInput.addEventListener("change", changeSize);

console.log(colorInput.value);