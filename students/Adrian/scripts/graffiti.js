/* 
*HTML elements
*/
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const cleanButton = document.getElementById("clean");
const colorinput = document.getElementById("color-input");
const sizeinput = document.getElementById("size-input");
/*
*Graffiti style
*/

surface.lineJoin = "round";
console.log(colorinput);
function changecolor() {
    surface.strokeStyle = colorinput.value;
}
function changesize() {
    surface.lineWidth = sizeinput.value;
}
changesize();
sizeinput.addEventListener("change", changesize)
changecolor();
colorinput.addEventListener("change", changecolor)



/*
*shapes
 */

/*
 * Clean
 */
function cleanCanvas() {
    surface.clearRect(0, 0, 400, 400)

}

cleanButton.addEventListener("click", cleanCanvas);
/**
 * Graffiti
 */
let oldX = 0
let oldY = 0
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
graffitiCanvas.addEventListener("mousemove", graffiti)