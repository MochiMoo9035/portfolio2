//-------------------------- Addition -----------------------------------------

var addOne = document.getElementById("add-one")
var addTwo = document.getElementById("add-two")
var addAnswer = document.getElementById('add-answer');

addOne.addEventListener('input', add);
addTwo.addEventListener('input', add);

function add() {
var one = parseFloat(addOne.value) || 0;
var two = parseFloat(addTwo.value) || 0;
addAnswer.innerText = one+two;
}

//------------------------- Subtraction ------------------------------------------

var subOne = document.getElementById("sub-one")
var subTwo = document.getElementById("sub-two")
var subAnswer = document.getElementById('sub-answer');

subOne.addEventListener('input', sub);
subTwo.addEventListener('input', sub);

function sub() {
var one = parseFloat(subOne.value) || 0;
var two = parseFloat(subTwo.value) || 0;
subAnswer.innerText = one-two;
}

//---------------------- Multiplication ---------------------------------------------

var mulOne = document.getElementById("mul-one")
var mulTwo = document.getElementById("mul-two")
var mulAnswer = document.getElementById('mul-answer');

mulOne.addEventListener('input', mul);
mulTwo.addEventListener('input', mul);

function mul() {
var one = parseFloat(mulOne.value) || 0;
var two = parseFloat(mulTwo.value) || 0;
mulAnswer.innerText = one*two;
}

//--------------------------- Division ----------------------------------------

var divOne = document.getElementById("div-one")
var divTwo = document.getElementById("div-two")
var divAnswer = document.getElementById('div-answer');

divOne.addEventListener('input', div);
divTwo.addEventListener('input', div);

function div() {
var one = parseFloat(divOne.value) || 0;
var two = parseFloat(divTwo.value) || 0;
divAnswer.innerText = one/two;
}

