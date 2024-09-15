const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const highScoreDisplay = document.getElementById('high-score');
const gameContainer = document.getElementById('game-container');
const startButton = document.getElementById('start-button');

let score = 0;
let timeLeft = 30;
let highScore = 0;
let timerInterval;

// Move the ball to a random position
function moveBall() {
    const maxWidth = gameContainer.offsetWidth - ball.offsetWidth;
    const maxHeight = gameContainer.offsetHeight - ball.offsetHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    ball.style.left = randomX + 'px';
    ball.style.top = randomY + 'px';
}

// Start the game
function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;

    gameContainer.style.display = 'block';
    startButton.style.display = 'none';

    moveBall();

    // Start countdown
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// End the game
function endGame() {
    clearInterval(timerInterval);

    // Update high score
    if (score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;
    }

    alert('Times up! Your score is ${score}.');
    
    gameContainer.style.display = 'none';
    startButton.style.display = 'block';
}

// Update score and move the ball when clicked
ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveBall();
});

// Start the game when the button is clicked
startButton.addEventListener('click', startGame);