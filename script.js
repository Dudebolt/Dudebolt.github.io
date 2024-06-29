document.addEventListener('DOMContentLoaded', (event) => {
    let score = 0;
    const scoreDisplay = document.getElementById('score');
    const clickerButton = document.getElementById('clicker-image');

    clickerButton.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
    });
});