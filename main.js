window.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const playerChoiceDisplay = document.getElementById('player-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const winnerDisplay = document.getElementById('winner');
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const themeToggleButton = document.getElementById('theme-toggle');

    let playerScore = 0;
    let computerScore = 0;

    document.getElementById('rock').addEventListener('click', () => playGame('rock'));
    document.getElementById('paper').addEventListener('click', () => playGame('paper'));
    document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
    themeToggleButton.addEventListener('click', toggleTheme);

    // Theme switching
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    }

    // Apply saved theme on load
    function applyTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    applyTheme();


    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let winner = '';

        if (playerChoice === computerChoice) {
            winner = 'draw';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            winner = 'player';
            playerScore++;
        } else {
            winner = 'computer';
            computerScore++;
        }

        playerChoiceDisplay.textContent = playerChoice;
        computerChoiceDisplay.textContent = computerChoice;
        winnerDisplay.textContent = winner;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }
});
