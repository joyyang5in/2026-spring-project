/*
 * HTML elements
 */
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const cleanButton = document.getElementById("clean");
const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("size-input");

/*
 * Graffiti style.
 */
surface.lineWidth = 13;
surface.lineJoin = "round";
changeColor()
function changeColor() {
surface.strokeStyle = colorInput.value;
console.log(colorInput.value);
}

changeSize()
function changeSize() {
surface.lineWidth = sizeInput.value;
console.log(sizeInput.value);
}

colorInput.addEventListener("change", changeColor);
sizeInput.addEventListener("change", changeSize);
/*
 * Shapes
 */
function shapes() {
  surface.rect(150, 200, 100, 100);
  surface.stroke();

  surface.beginPath();
  surface.moveTo(200, 50);
  surface.lineTo(150, 200);
  // Add a 7.
  surface.moveTo(250, 50);
  surface.lineTo(350, 50);
  surface.moveTo(350, 50);
  surface.lineTo(270, 300);

  surface.closePath();
  surface.stroke();
}
shapes();

/*
 * Clean up
 */
function cleanCanvas() {
  surface.clearRect(0, 0, 400, 400);
}
    oldX = 0
    oldY = 0
function graffiti(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y, event.buttons)
    
    if(event.buttons === 1){
    surface.beginPath();
    surface.moveTo(oldX, oldY);
    surface.lineTo(x, y);
    surface.closePath();
    surface.stroke();      
    }

    oldX = x
    oldY = y
}

cleanButton.addEventListener("click", cleanCanvas);
graffitiCanvas.addEventListener("mousemove", graffiti)