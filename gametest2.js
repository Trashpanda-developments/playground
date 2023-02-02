
var memoryGame = document.createElement('div');
memoryGame.innerHTML = '<div id="memoryGame" style="width: 500px; height: 500px; background-color: #eee;"></div>';
document.body.appendChild(memoryGame);

var memoryGame = document.getElementById('memoryGame');

var memoryGameHTML = '';
var card = '<div class="card col-xs-3">';
var cardBack = '<div class="card-back">';
var cardFront = '<div class="card-front">';
var cardPair = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

for (var i = 0; i < 12; i++) {
  var randomIndex = Math.floor(Math.random() * cardPair.length);
  var randomNumber = cardPair.splice(randomIndex, 1)[0];
  memoryGameHTML += card + cardBack + '?' + '</div>' + cardFront + randomNumber + '</div></div>';
}

memoryGame.innerHTML = memoryGameHTML;

var cards = document.getElementsByClassName('card');
var cardsLength = cards.length;
var flippedCards = [];

for (var i = 0; i < cardsLength; i++) {
  cards[i].addEventListener('click', flipCard, false);
}

function flipCard() {
  if (flippedCards.length < 2) {
    this.classList.add('flipped');
    flippedCards.push(this);
    if (flippedCards.length === 2) {
      if (flippedCards[0].childNodes[3].innerHTML === flippedCards[1].childNodes[3].innerHTML) {
        flippedCards[0].removeEventListener('click', flipCard, false);
        flippedCards[1].removeEventListener('click', flipCard, false);
      }
      setTimeout(flipBack, 1000);
    }
  }
}

function flipBack() {
  flippedCards[0].classList.remove('flipped');
  flippedCards[1].classList.remove('flipped');
  flippedCards = [];
}

