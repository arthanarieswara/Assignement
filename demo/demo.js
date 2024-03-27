function rollDice() {
    const die = document.getElementById('diceImg');
    die.classList.remove('roll-animation'); // Remove the animation class
    void die.offsetWidth; // Trigger reflow to restart animation
    die.classList.add('roll-animation'); // Add the animation class to restart animation
}
