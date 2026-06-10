/*
 * HTML elements
 */
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const cleanButton = document.getElementById("clean");
const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("size-input");

/*
 * Graffiti style
 */
surface.lineJoin = "round";

function changeColor() {
    surface.strokeStyle = colorInput.value;
}
colorInput.addEventListener("change", changeColor);
changeColor();

function changeSize() {
    surface.lineWidth = sizeInput.value;
}
sizeInput.addEventListener("change", changeSize);
changeSize();

/*
 * Shapes
 */
function shapes() {
    surface.rect(150, 200, 100, 100);
    surface.stroke();

    surface.beginPath();
    surface.moveTo(200, 50);
    surface.lineTo(150, 200);
    surface.moveTo(350, 50);
    surface.lineTo(250, 50);
    surface.moveTo(300, 300)
    surface.lineTo(350, 50);
    surface.closePath();
    surface.stroke();
}
// shapes();

/*
 * Clean up
 */
function cleanCanvas() {
    surface.clearRect(0, 0, 400, 400);
}
cleanButton.addEventListener("click", cleanCanvas);

/*
 * Graffiti
 */
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
    }
    oldX = x;
    oldY = y;
}
graffitiCanvas.addEventListener("mousemove", graffiti);