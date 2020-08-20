let minus = document.getElementById("minus-button");
let board = document.getElementById("#display-board");
let plus = document.getElementById("plus-button");
let storage = document.getElementById("card-storage");
let cards = document.querySelectorAll(".card");
let cardNumber = 0;
//  //let cards = document.getElementsByClassName('card');

//  document.getElementsByClassName('card')[0].style.visibility = 'hidden';
for (let card of cards) card.style.visibility = 'hidden';


plus.addEventListener("click", addCard);
minus.addEventListener("click", minusCard);

cards[0].style.visibility = "visible"

function addCard() {
  if(cardNumber <= cards.length){
  cardNumber += 1;
  cards[cardNumber].style.visibility = 'visible';
  for(i=cardNumber; i < cards.length; i++){
    card[i].style.visibility = 'hidden';
  } 
  }
}

function minusCard() {
  cardNumber = 0;
for(var i = 1; i < cards.length; i++){
    cards[i].style.visibility = "hidden"
}
window.scrollTo(0, 0);
}
