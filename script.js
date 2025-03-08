// Define card pairs
const cardPairs = [
    { id: 1, src: "image1.jpg" },
    { id: 1, src: "image1.jpg" },
    { id: 2, src: "image2.jpg" },
    { id: 2, src: "image2.jpg" },
    { id: 3, src: "image3.jpg" },
    { id: 3, src: "image3.jpg" },
    { id: 4, src: "image4.jpg" },
    { id: 4, src: "image4.jpg" },
    { id: 5, src: "image5.jpg" },
    { id: 5, src: "image5.jpg" },
    { id: 6, src: "image6.jpg" },
    { id: 6, src: "image6.jpg" },
    { id: 7, src: "image7.jpg" },
    { id: 7, src: "image7.jpg" },
    { id: 8, src: "image8.jpg" },
    { id: 8, src: "image8.jpg" },
];

// Shuffle the cards
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Create game board
const gameBoard = document.getElementById('gameBoard');
const shuffledCards = shuffle(cardPairs);

let clickedCards = [];
let matchesFound = 0;

// Function to flip card
function flipCard(card) {
    card.classList.add('flipped');
    card.innerHTML = `<img src="${card.dataset.src}">`;
}

// Function to check match
function checkMatch() {
    if (clickedCards[0].dataset.id === clickedCards[1].dataset.id) {
        matchesFound++;
        clickedCards = [];
    } else {
        setTimeout(() => {
            clickedCards[0].classList.remove('flipped');
            clickedCards[0].innerHTML = '';
            clickedCards[1].classList.remove('flipped');
            clickedCards[1].innerHTML = '';
            clickedCards = [];
        }, 1000);
    }
}

// Create cards and add event listeners
shuffledCards.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.src = card.src;
    cardElement.dataset.id = card.id;

    cardElement.addEventListener('click', () => {
        if (cardElement.classList.contains('flipped')) return;
        flipCard(cardElement);
        clickedCards.push(cardElement);

        if (clickedCards.length === 2) {
            checkMatch();
        }
    });

    gameBoard.appendChild(cardElement);
});
