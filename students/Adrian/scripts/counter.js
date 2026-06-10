//variables
let counterbutton = document.getElementById("counter-button");
let counter = document.getElementById("counter");

let number = 0;
let minusbutton = document.getElementById("minus-button");
let clearbutton = document.getElementById("clear-button");
let number1button = document.getElementById("one-button");
let number2button = document.getElementById("two-button");
let number3button = document.getElementById("three-button");
let number4button = document.getElementById("four-button");
let number5button = document.getElementById("five-button");
let number6button = document.getElementById("six-button");
let number7button = document.getElementById("seven-button");
let number8button = document.getElementById("eight-button");
let number9button = document.getElementById("nine-button");
let number0button = document.getElementById("zero-button");
let addbutton = document.getElementById("plus-button");
let subtractbutton = document.getElementById("subtract-button");
let equalbutton = document.getElementById("equal-button");
let multiplybutton = document.getElementById("mutiply-button");
let dividebutton = document.getElementById("divide-button");
let memory = 0;
let symbolmemory = "0";

// functions
function show(value) {
    counter.textContent = value;
}
function add1() {
    number = number + 1;
    show(number);
}


function minus() {
    number = number - 1;
    show(number);
}
function clear() {
    number = 0;
    show(number);
    memory = 0;
}
function add() {
    memory = number;
    symbolmemory = "add";
    number = 0;

}
function subtract() {
    memory = number;
    symbolmemory = "subtract";
    number = 0;
}
function multiply() {
    memory = number;
    symbolmemory = "multiply";
    number = 0;
}
function divide() {
    memory = number;hi
    symbolmemory = "divide";
    number = 0;
}


function equal() {
    if(symbolmemory==="add"){
        memory = number + memory;
    }
    if(symbolmemory==="subtract"){
        memory = memory - number;
    }
    
    show(memory);
     if(symbolmemory==="multiply"){
        memory = numberxmemory;
    }
    show(memory);
     if(symbolmemory==="divide"){
        memory =memory/number;
    }
    
    
    
    show(memory);
   

}
function one() {
    number = number * 10 + 1;
    show(number);
}
function two() {
    number = number * 10 + 2;
    show(number);
}
function three() {
    number = number * 10 + 3;
    show(number);
}
function four() {
    number = number * 10 + 4;
    show(number);
}
function five() {
    number = number * 10 + 5
    show(number);
}
function six() {
    number = number * 10 + 6;
    show(number);
}
function seven() {
    number = number * 10 + 7;
    show(number);
}
function eight() {
    number = number * 10 + 8;
    show(number);
}
function nine() {
    number = number * 10 + 9;
    show(number);
}
function zero() {
    number = number * 10 + 0;
    show(number);
}

// Event listener
minusbutton.addEventListener("click", minus);
counterbutton.addEventListener("click", add1);
clearbutton.addEventListener("click", clear);
number1button.addEventListener("click", one);
number2button.addEventListener("click", two);
number3button.addEventListener("click", three);
number4button.addEventListener("click", four);
number5button.addEventListener("click", five);
number6button.addEventListener("click", six);
number7button.addEventListener("click", seven);
number8button.addEventListener("click", eight);
number9button.addEventListener("click", nine);
number0button.addEventListener("click", zero);
addbutton.addEventListener("click", add);
subtractbutton.addEventListener("click", subtract);
equalbutton.addEventListener("click", equal);
multiplybutton.addEventListener("click", multiply);
dividebutton.addEventListener("click", divide);