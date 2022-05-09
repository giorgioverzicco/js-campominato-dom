const MAX_BOMBS = 16;
const MAX_PLAYER_TRIES = 100 - MAX_BOMBS;

const bombs = [];
const playerNumbers = [];

let playerScore = 0;
let playerWon = true;

// generate X random numbers to act as bombs
while (bombs.length < MAX_BOMBS) {
  const rand = Math.floor(Math.random() * 100) + 1;

  if (!bombs.includes(rand)) {
    bombs.push(rand);
  }
}

// ask player to digit a number and find if that number is a bomb
while (playerNumbers.length < MAX_PLAYER_TRIES) {
  const playerNumber = Number(prompt("Digita un numero compreso tra 1 e 100"));
  if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 100) continue;

  if (bombs.includes(playerNumber)) {
    playerWon = false;
    break;
  }

  if (!playerNumbers.includes(playerNumber)) {
    playerNumbers.push(playerNumber);
    ++playerScore;
  } else {
    alert(`Hai già digitato ${playerNumber}! Devi digitare numeri diversi!`);
  }
}

if (playerWon) {
  alert(`Complimenti! Hai vinto! Il tuo punteggio è: ${playerScore}`);
} else {
  alert(`Peccato, hai beccato una bomba! Il tuo punteggio è: ${playerScore}`);
}
