function getDifficulty() {
  let difficulty;

  do {
    difficulty = Number(
      prompt(`Scegli la difficoltà:
      0 - Facile
      1 - Normale
      2 - Difficile`)
    );
  } while (isNaN(difficulty) || difficulty < 0 || difficulty > 2);

  return difficulty;
}

function getMaxRange(difficulty) {
  if (difficulty === 0) {
    return 100;
  } else if (difficulty === 1) {
    return 80;
  }
  return 50;
}

const DIFFICULTY = getDifficulty();
const MAX_RANGE = getMaxRange(DIFFICULTY);

const MAX_BOMBS = 16;
const MAX_PLAYER_TRIES = MAX_RANGE - MAX_BOMBS;

const bombs = [];
const playerNumbers = [];

let playerScore = 0;
let playerWon = true;

// generate X random numbers to act as bombs
while (bombs.length < MAX_BOMBS) {
  const rand = Math.floor(Math.random() * MAX_RANGE) + 1;

  if (!bombs.includes(rand)) {
    bombs.push(rand);
  }
}

// ask player to digit a number and find if that number is a bomb
while (playerNumbers.length < MAX_PLAYER_TRIES) {
  const playerNumber = Number(prompt(`Digita un numero compreso tra 1 e ${MAX_RANGE}`));
  if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > MAX_RANGE) continue;

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
