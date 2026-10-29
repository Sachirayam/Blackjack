// const dealerCards = document.querySelector("#cardsd");
// const dealerSum = document.querySelector("#sumd");

let cards = []
let sum = 0;
let active = false;
let won = false;
let message = "";
let messageG = document.querySelector("#messageg");
const playerCards = document.querySelector("#cardsp");
const playerSum = document.querySelector("#sump");

console.log(cards)

function getRandomNum() {
    let randomNum = Math.floor(Math.random()* 13) + 1

    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function startGame() {
    active = true;
    let fCard = getRandomNum();
    let sCard = getRandomNum();
    cards = [fCard, sCard]
    sum = fCard + sCard 
    renderGame()
    console.log(cards)
}


function renderGame() {
    playerCards.textContent = "Cards: "
     for (let i = 0; i < cards.length; i++) {
    playerCards.textContent += cards[i] + " "
    }
    playerSum.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Would you like to draw a new card?"
    } else if (sum === 21) {
        message = "You've got blackjack!!!"
        won = true
    } else {
        message = "You've lost, you're out of the game!"
        active = false
    }
    messageG.textContent = message
}
function hit() {
    messageG.textContent = message = "The dealer agrees to hit the player! (litteraly!)"
    if (active && !won) {
        let card = getRandomNum()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function stand() {
    messageG.textContent = message = "the player now stands while playing the game!"
}