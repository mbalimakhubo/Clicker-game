// score initialise
let score = 0;

// references to the DOM elements
const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('click-button');

// Event listener for the button
clickButton.addEventListener('click', () => {
    // score increased by 1
    score++;
    
    // Score display
    scoreDisplay.textContent = score;
});
