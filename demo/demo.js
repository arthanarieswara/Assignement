const diceImages = [
    'dice-1.png',
    'dice-2.png',
    'dice-3.png',
    'dice-4.png',
    'dice-5.png',
    'dice-6.png'
];

let currentPlayer = 1;
let scores = [0, 0];

function rollDice(player) {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    const diceImage = diceImages[diceNumber - 1];

    document.getElementById(`player${player}`).innerHTML += `
        <img src="${diceImage}" alt="Dice ${diceNumber}">
    `;

    scores[player - 1] += diceNumber;
    document.getElementById(`score${player}`).textContent = scores[player - 1];

    document.getElementById(`rollBtn${player}`).disabled = true;
    document.getElementById(`rollBtn${3 - player}`).disabled = false;

    if (scores[player - 1] >= 30) {
        alert(`Player ${player} wins!`);
        document.getElementById('resetBtn').disabled = false;
        disableRollButtons();
    }
}

function disableRollButtons() {
    document.getElementById('rollBtn1').disabled = true;
    document.getElementById('rollBtn2').disabled = true;
}

function resetGame() {
    currentPlayer = 1;
    scores = [0, 0];
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('player1').innerHTML = `
        <h2>Player 1</h2>
        <p>Score: <span id="score1">0</span></p>
        <button onclick="rollDice(1)" id="rollBtn1">Roll Dice</button>
    `;
    document.getElementById('player2').innerHTML = `
        <h2>Player 2</h2>
        <p>Score: <span id="score2">0</span></p>
        <button onclick="rollDice(2)" id="rollBtn2" disabled>Roll Dice</button>
    `;
    document.getElementById('resetBtn').disabled = true;
}
