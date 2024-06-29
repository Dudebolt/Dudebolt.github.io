document.addEventListener('DOMContentLoaded', (event) => {
    // Попытаемся получить сохраненный score из localStorage при загрузке страницы
    let score = localStorage.getItem('score') || 0;
    const scoreDisplay = document.getElementById('score');
    const clickerButton = document.getElementById('clicker-image');

    // Отображаем начальное значение score
    scoreDisplay.textContent = score;

    clickerButton.addEventListener('click', () => {
        // Увеличиваем score при каждом клике
        score++;
        // Обновляем отображение score на странице
        scoreDisplay.textContent = score;
        // Сохраняем новое значение score в localStorage
        localStorage.setItem('score', score);
    });
});
