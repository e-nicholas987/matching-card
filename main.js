var cardsArray = [
  { name: "CSS", img: "/images/css3-logo.png" },
  { name: "HTML", img: "images/html5-logo.png" },
  { name: "jQuery", img: "images/jquery-logo.png" },
  { name: "JS", img: "images/js-logo.png" },
  { name: "Node", img: "images/nodejs-logo.png" },
  { name: "Photo Shop", img: "images/photoshop-logo.png" },
  { name: "PHP", img: "images/php-logo_1.png" },
  { name: "Python", img: "images/python-logo.png" },
  { name: "Ruby", img: "images/rails-logo.png" },
  { name: "Sass", img: "images/sass-logo.png" },
  { name: "Sublime", img: "images/sublime-logo.png" },
  { name: "Wordpress", img: "images/wordpress-logo.png" },
];

function sort(arr) {
  return arr.sort((a, b) => 0.5 - Math.random());
}

var concatArr = cardsArray.concat(cardsArray);
var newCardArr = sort(concatArr);

var card = document.getElementById("card");
newCardArr.forEach((item) => {
  var cardGrid = document.createElement("div");
  cardGrid.classList.add("card-grid");
  cardGrid.dataset.name = item.name;
  cardGrid.style.backgroundImage = `url(${item.img})`;
  cardGrid.classList.add("remove-img");
  card.appendChild(cardGrid);
});
let clickCount = 0;
let previousTarget;
let firstClick = "";
let secondClick = "";

function match() {
  let guesses = document.querySelectorAll(".selected");
  guesses.forEach((item) => {
    item.classList.add("match");
    item.classList.remove("remove-img");
  });
  console.log(guesses);
}

function wrongMatch() {
  let guesses = document.querySelectorAll(".selected");
  guesses.forEach((item) => {
    item.classList.add("unmatch");
  });
}

function unmatch() {
  let guesses = document.querySelectorAll(".selected");
  guesses.forEach((item) => {
    item.classList.add("remove-img");
  });
}

function reset() {
  let guesses = document.querySelectorAll(".selected");
  guesses.forEach((item) => {
    item.classList.remove("selected");
    item.classList.remove("animation");
    item.classList.remove("unmatch")
  });
  firstClick = "";
  secondClick = "";
  clickCount = 0;
  card.style.cursor = "initial";
}

card.addEventListener("click", (e) => {
  clicked = e.target;

  if (
    clicked === previousTarget ||
    clicked.classList.contains("match") ||
    clicked.classList === "selected"
  ) {
    return;
  }
  if (clickCount < 2) {
    clickCount++;

    if (clickCount === 1) {
      firstClick = clicked.dataset.name;
      clicked.classList.add("selected");
      clicked.classList.add("animation");
      clicked.classList.remove("remove-img");
    } else {
      secondClick = clicked.dataset.name;
      clicked.classList.add("selected");
      clicked.classList.add("animation");
      clicked.classList.remove("remove-img");
      card.style.cursor = "none";
    }

    if (firstClick !== "" && secondClick !== "") {
      if (firstClick === secondClick) {
        match();
        reset();
      } else {
        wrongMatch();
        setTimeout(unmatch, 2000);
        setTimeout(reset, 2000);
      }
    }
  }
  previousTarget = clicked;
});
