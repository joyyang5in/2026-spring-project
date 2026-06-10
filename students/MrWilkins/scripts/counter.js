const counter = document.getElementById('calculator');
const plusOneButton = document.getElementById('calc-button-plusone');
const minusOneButton = document.getElementById('calc-button-minusone');
const clearButton = document.getElementById('calc-button-clear');
const addButton = document.getElementById('calc-button-add');
const subtractButton = document.getElementById('calc-button-subtract');
const multiplyButton = document.getElementById('calc-button-multiply');
const divideButton = document.getElementById('calc-button-divide');
const equalButton = document.getElementById('calc-button-equal');

const button1 = document.getElementById('calc-button-1');
const button2 = document.getElementById('calc-button-2');
const button3 = document.getElementById('calc-button-3');
const button4 = document.getElementById('calc-button-4');
const button5 = document.getElementById('calc-button-5');
const button6 = document.getElementById('calc-button-6');
const button7 = document.getElementById('calc-button-7');
const button8 = document.getElementById('calc-button-8');
const button9 = document.getElementById('calc-button-9');
const button0 = document.getElementById('calc-button-0');

let number = 0;
let memory = 0;
let operation = '';

function show(value) {
  counter.textContent = value;
}

function clear() {
  number = 0;
  memory = 0;
  operation = '';
  show(number);
}

function operator(op) {
  memory = number;
  number = 0;
  operation = op;
}
function add() {
  operator('add');
}
function subtract() {
  operator('subtract');
}
function multiply() {
  operator('multiply');
}
function divide() {
  operator('divide');
}
function equal() {
  if (operation === 'add') {
    memory = memory + number;
  } else if (operation === 'subtract') {
    memory = memory - number;
  } else if (operation === 'multiply') {
    memory = memory * number;
  } else if (operation === 'divide') {
    memory = memory / number;
  }
  number = 0;
  show(memory);
}

function plusOne() {
  number = number + 1;
  show(number);
}

function minusOne() {
  number = number - 1;
  show(number);
}

function press1 () {
  number = 10*number + 1;
  show(number);
}
function press2 () {
  number = 10*number + 2;
  show(number);
}
function press3 () {
  number = 10*number + 3;
  show(number);
}
function press4 () {
  number = 10*number + 4;
  show(number);
}
function press5 () {
  number = 10*number + 5;
  show(number);
}
function press6 () {
  number = 10*number + 6;
  show(number);
}
function press7 () {
  number = 10*number + 7;
  show(number);
}
function press8 () {
  number = 10*number + 8;
  show(number);
}
function press9 () {
  number = 10*number + 9;
  show(number);
}
function press0 () {
  number = 10*number + 0;
  show(number);
}



plusOneButton.addEventListener('click', plusOne);
minusOneButton.addEventListener('click', minusOne);
clearButton.addEventListener('click', clear);
addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
equalButton.addEventListener('click', equal);

button1.addEventListener('click', press1);
button2.addEventListener('click', press2);
button3.addEventListener('click', press3);
button4.addEventListener('click', press4);
button5.addEventListener('click', press5);
button6.addEventListener('click', press6);
button7.addEventListener('click', press7);
button8.addEventListener('click', press8);
button9.addEventListener('click', press9);
button0.addEventListener('click', press0);
