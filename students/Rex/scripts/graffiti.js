/*
*HTML elements
*/
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const cleanbutton = document.getElementById("clean");
const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("size-input");

/*
graffiti style
*/
surface.lineJoin = "round";
function changeColor() {
    surface.strokeStyle = colorInput.value;
};
changeColor();
colorInput.addEventListener("change", changeColor);

function changeSize() {
    console.log(sizeInput.value);
    surface.lineWidth = sizeInput.value;
}
changeSize();
sizeInput.addEventListener("change", changeSize);
/*
*shape
*/

function shape() {
    surface.rect(100, 200, 100, 100);
    surface.stroke();

    surface.beginPath();
    surface.moveTo(150, 50);
    surface.lineTo(100, 200);
    surface.closePath();
    surface.stroke();

    surface.beginPath();
    surface.moveTo(225, 50);
    surface.lineTo(230, 150);
    surface.moveTo(220, 50);
    surface.lineTo(325, 50);
    surface.moveTo(325, 50);
    surface.lineTo(310, 300);
    surface.closePath();
    surface.stroke();

};
shape();

function cleanCanvas() {
    surface.clearRect(0, 0, 400, 400);
};
cleanbutton.addEventListener("click", cleanCanvas);

let oldX = 0;
let oldY = 0;

function graffiti(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y, event.buttons);
    if (event.buttons === 1) {
        surface.beginPath();
        surface.moveTo(oldX, oldY);
        surface.lineTo(x, y);
        surface.closePath();
        surface.stroke();
    };
    oldX = x;
    oldY = y;
};


graffitiCanvas.addEventListener("mousemove", graffiti);