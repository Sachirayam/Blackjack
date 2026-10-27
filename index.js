// const dealerCards = document.querySelector("#cardsd");
// const dealerSum = document.querySelector("#sumd");
const playerCards = document.querySelector("#cardsp");
const playerSum = document.querySelector("#sump");
let messageG = document.querySelector("#messageg");

// let cards = ["Ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]

let fCard = 10;
let sCard = 4;

let cards = [fCard, sCard]
let sum = fCard + sCard;
let message = "";
let active = true;
let won = false

function startGame(){
    renderGame()
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

    let card = 7
    sum += card

    cards.push(card)
    console.log(cards)
    renderGame()
}

function stand() {
    messageG.textContent = message = "the player now stands while playing the game!"
}