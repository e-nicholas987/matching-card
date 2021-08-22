var cardsArray = [
    { 'name': 'CSS', 'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true', },
    { 'name': 'HTML', 'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true', },
    { 'name': 'jQuery', 'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true', },
    { 'name': 'JS', 'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true', },
    { 'name': 'Node', 'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true', },
    { 'name': 'Photo Shop', 'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true', },
    { 'name': 'PHP', 'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true', },
    { 'name': 'Python', 'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true', },
    { 'name': 'Ruby', 'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true', },
    { 'name': 'Sass', 'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true', },
    { 'name': 'Sublime', 'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true', },
    { 'name': 'Wordpress', 'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true', },
];


function sort(arr) {
    return arr.sort((a, b) => 0.5 - Math.random());
}

var concatArr = cardsArray.concat(cardsArray)
var newCardArr = sort(concatArr)

var card = document.getElementById("card");
newCardArr.forEach(item => {
    var cardGrid = document.createElement('div');
    cardGrid.classList.add('card-grid')
    cardGrid.dataset.name = item.name
    cardGrid.style.backgroundImage = `url(${item.img})`;
    cardGrid.classList.add('remove-img');
    card.appendChild(cardGrid);
})
let clickCount = 0;
let previousTarget;
let firstClick = '';
let secondClick = '';

function match() {
    let guesses = document.querySelectorAll('.selected')
    console.log(guesses)
    guesses.forEach(item => {
         item.classList.add('match')
         item.classList.remove('remove-img')

    }
    )
    console.log(guesses)
}

function unmatch(){
    let guesses = document.querySelectorAll('.selected')
    guesses.forEach(item => {
                    item.classList.add('remove-img')
                }
    )
}

function reset(){
    let guesses = document.querySelectorAll('.selected')
    guesses.forEach(item => {
       item.classList.remove("selected")
       item.classList.remove("animation")

        })
firstClick = '';
secondClick = '';
clickCount = 0;
}

card.addEventListener('click', (e) => {

    clicked = e.target;

    if (clicked === previousTarget || clicked.classList.contains('match')||clicked.classList === 'selected') {
        return
    }
    if (clickCount < 2) {
        clickCount++;

        if (clickCount === 1) {
            firstClick = clicked.dataset.name;
            clicked.classList.add('selected')
            clicked.classList.add('animation')            
            clicked.classList.remove('remove-img')


        } else {
            secondClick = clicked.dataset.name;
            clicked.classList.add('selected')
            clicked.classList.add('animation')
            clicked.classList.remove('remove-img');
        }

        if (firstClick !== '' && secondClick !== '') {
            if (firstClick === secondClick) {
                match()
                reset()
            } else {
                setTimeout(unmatch, 2000)
                setTimeout(reset, 2000)
                // unmatch()
              
            }
        }

    }  previousTarget = clicked;
console.log(clickCount)


})



