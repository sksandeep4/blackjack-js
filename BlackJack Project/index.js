
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let sum = 0
// -----------------------------------------------------------------------------
function getRandomCard(){
  let randomCard = Math.floor((Math.random() * 13) + 1);
  if(randomCard === 1){
    return 11
  }
  else if (randomCard > 10) {
    return 10
  }
  else{
  return randomCard;
  }
}

// -----------------------------------------------------------------------------

function startGame(){
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

// -----------------------------------------------------------------------------

function renderGame(){
  cardsEl.textContent = "Cards: ";
  for (let i=0; i<cards.length;i+=1){
    cardsEl.textContent += cards[i]+" ";
  }
  sumEl.textContent = "Sum: " + sum;
  if((sum) <= 20){
    message = "Do you want to draw a new card?";
  }
  else if((sum) === 21){
    hasBlackJack = true;
    message = "You've got BlackJack!";
  }
  else{
    message = "You've lost the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

// -----------------------------------------------------------------------------
function newCard(){
  if(isAlive === true && hasBlackJack === false){
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
  }
}
