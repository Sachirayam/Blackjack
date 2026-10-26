// const dealerCards = document.querySelector("#cardsd");
// const dealerSum = document.querySelector("#sumd");
const playerCards = document.querySelector("#cardsp");
const playerSum = document.querySelector("#sump");
let messageG = document.querySelector("#messageg")

let fCard = 10;
let sCard = 10;
let sum = fCard + sCard;
let message = "";
let active = true;
let won = false


function play() {
    playerCards.textContent = "Cards: " + fCard + " " + sCard
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