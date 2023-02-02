var memoryGame = document.createElement('div');
memoryGame.id = 'memoryGame';
document.body.appendChild(memoryGame);

var memoryGameCards = [
  {
    id: 'card1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png',
    name: 'JavaScript'
  },
  {
    id: 'card2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png',
    name: 'JavaScript'
  },
  {
    id: 'card3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png',
    name: 'CSS'
  },
  {
    id: 'card4',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png',
    name: 'CSS'
  },
  {
    id: 'card5',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png',
    name: 'HTML'
  },
  {
    id: 'card6',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png',
    name: 'HTML'
  },
  {
    id: 'card7',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png',
    name: 'React'
  },
  {
    id: 'card8',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png',
    name: 'React'
  },
  {
    id: 'card9',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png',
    name: 'Angular'
  },
  {
    id: 'card10',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png',
    name: 'Angular'
  },
  {
    id: 'card11',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/240px-Node.js_logo.svg.png',
    name: 'Node'
  },
  {
    id: 'card12',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/240px-Node.js_logo.svg.png',
    name: 'Node'
  }
];

var memoryGameCardsShuffled = shuffle(memoryGameCards);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
for (var i = 0; i < memoryGameCardsShuffled.length; i++) {
  var memoryGameCard = document.createElement('div');
  memoryGameCard.className = 'memoryGameCard';
  memoryGameCard.id = memoryGameCardsShuffled[i].id;
  memoryGameCard.innerHTML = '<img src="' + memoryGameCardsShuffled[i].image + '" alt="' + memoryGameCardsShuffled[i].name + '" />';
  memoryGame.appendChild(memoryGameCard);
}
var memoryGameCards = document.getElementsByClassName('memoryGameCard');
for (var i = 0; i < memoryGameCards.length; i++) {
  memoryGameCards[i].addEventListener('click', function() {
    this.classList.add('flipped');
  });
}