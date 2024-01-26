const cards = document.querySelectorAll(".card");
const cardImages = document.querySelectorAll(
  ".card .card-inner .front-face img"
);
let arrayOfCards = [
  { urlImage: "./images/react.png" },
  { urlImage: "./images/angular.png" },
  { urlImage: "./images/vuejs.jpg" },
  { urlImage: "./images/html5.png" },
  { urlImage: "./images/css.png" },
  { urlImage: "./images/javascript.png" },
  { urlImage: "./images/python.png" },
  { urlImage: "./images/c++.png" },
  { urlImage: "./images/java.png" },
  { urlImage: "./images/fullstuck.png" },
  { urlImage: "./images/react.png" },
  { urlImage: "./images/angular.png" },
  { urlImage: "./images/vuejs.jpg" },
  { urlImage: "./images/html5.png" },
  { urlImage: "./images/css.png" },
  { urlImage: "./images/javascript.png" },
  { urlImage: "./images/python.png" },
  { urlImage: "./images/c++.png" },
  { urlImage: "./images/java.png" },
  { urlImage: "./images/fullstuck.png" },
];

let target = 0;
let counter = 0;
let arrayOfRandomCards = [];
let checkArray = [];

fillArrayWithCards();

let isTrue = [];
let clicked = [];
cards.forEach((card, index) => {
  card.addEventListener("click", function () {
    if (isTrue.length < 2) {
      activeCard(card);
      clicked.push(index);
      isTrue.push(checkArray[index]);
      if (isTrue.length == 2) {
        if (isTrue[0] + 10 !== isTrue[1] && isTrue[0] - 10 !== isTrue[1]) {
          isTrue = [];
          inactiveCard(cards[clicked[0]]);
          inactiveCard(cards[clicked[1]]);
          clicked = [];
        } else if (isTrue[0] + 10 == isTrue[1] || isTrue[0] - 10 == isTrue[1]) {
          clicked = [];
          isTrue = [];
        }
      }
    }
  });
});

// functions

function activeCard(card) {
  if (!card.classList.contains("active")) card.classList.add("active");
}

function inactiveCard(card) {
  setTimeout(() => {
    if (card.classList.contains("active")) card.classList.remove("active");
  }, 800);
}

function fillArrayWithCards() {
  const numR = Math.floor(Math.random() * 20);
  if (check(numR)) {
    arrayOfRandomCards.push(arrayOfCards[numR].urlImage);
    checkArray.push(numR);
    if (checkArray.length < 20) {
      fillArrayWithCards();
    } else {
      fillHtml();
    }
  } else {
    if (checkArray.length < 20) {
      fillArrayWithCards();
    } else {
      fillHtml();
    }
  }
}
function check(target) {
  for (let i = 0; i < checkArray.length; i++) {
    if (checkArray[i] === target) {
      return false;
    }
  }
  return true;
}

function fillHtml() {
  arrayOfRandomCards.forEach((ele, index) => {
    cardImages[index].src = ele;
  });
}
