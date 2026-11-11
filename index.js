const player = {
    name: "John Doe",
    chips: 200
};

let cards = [];
let sum = 0;
let gameIsActive = false;
let playerHasBlackjack = false;

const playerNameElement = document.querySelector("#player-name");
const gameMessageElement = document.querySelector("#game-message");
const playerCardsElement = document.querySelector("#player-cards");
const playerSumElement = document.querySelector("#player-sum");
const bankrollElement = document.querySelector("#bankroll");

playerNameElement.textContent = player.name;
updateBankroll();

function getRandomCard() {
    const randomCard = Math.floor(Math.random() * 13) + 1;

    if (randomCard > 10) {
        return 10;
    }

    return randomCard === 1 ? 11 : randomCard;
}

function startGame() {
    cards = [getRandomCard(), getRandomCard()];
    sum = calculateHandSum();
    gameIsActive = true;
    playerHasBlackjack = false;

    renderGame();

    if (sum === 21) {
        playerHasBlackjack = true;
        gameIsActive = false;
        player.chips += 100;
        updateBankroll();
        gameMessageElement.textContent = "You've got blackjack! You won 100 credits.";
    }
}

function renderGame() {
    playerCardsElement.textContent = `Cards: ${cards.join(" ")}`;
    playerSumElement.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
        gameMessageElement.textContent = "Would you like to draw a new card?";
    }

    updateBankroll();
}

function calculateHandSum() {
    let handSum = cards.reduce((total, card) => total + card, 0);
    let acesCountedAsEleven = cards.filter((card) => card === 11).length;

    while (handSum > 21 && acesCountedAsEleven > 0) {
        handSum -= 10;
        acesCountedAsEleven -= 1;
    }

    return handSum;
}

function updateBankroll() {
    bankrollElement.textContent = `Credits: $${player.chips}`;
}

function hit() {
    if (!gameIsActive || playerHasBlackjack) {
        return;
    }

    cards.push(getRandomCard());
    sum = calculateHandSum();

    if (sum > 21) {
        gameIsActive = false;
        player.chips -= 10;
        renderGame();
        gameMessageElement.textContent = "You've gone over 21 and lost 10 credits.";
        return;
    }

    renderGame();

    if (sum === 21) {
        gameIsActive = false;
        player.chips += 50;
        updateBankroll();
        gameMessageElement.textContent = "You've got blackjack! You won 50 credits.";
    }
}

function stand() {
    if (gameIsActive) {
        gameIsActive = false;
        gameMessageElement.textContent = "You chose to stand. Start a new game to play again.";
    }
}
