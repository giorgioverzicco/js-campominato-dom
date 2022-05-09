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

function getBombs(nElements, maxRandomRange) {
  const bombs = [];

  while (bombs.length < nElements) {
    const rand = Math.floor(Math.random() * maxRandomRange) + 1;

    if (!bombs.includes(rand)) {
      bombs.push(rand);
    }
  }

  return bombs;
}

function getPlayerNumbers(maxTries, maxRandomRange) {
  const playerNumbers = [];

  while (playerNumbers.length < maxTries) {
    const playerNumber = Number(prompt(`Digita un numero compreso tra 1 e ${maxRandomRange}`));
    if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > maxRandomRange) continue;
    if (bombs.includes(playerNumber)) break;

    if (!playerNumbers.includes(playerNumber)) {
      playerNumbers.push(playerNumber);
    } else {
      alert(`Hai già digitato ${playerNumber}! Devi digitare numeri diversi!`);
    }
  }

  return playerNumbers;
}

const DIFFICULTY = getDifficulty();
const MAX_RANGE = getMaxRange(DIFFICULTY);
const MAX_BOMBS = 16;
const MAX_PLAYER_TRIES = MAX_RANGE - MAX_BOMBS;

const bombs = getBombs(MAX_BOMBS, MAX_RANGE);
const playerNumbers = getPlayerNumbers(MAX_PLAYER_TRIES, MAX_RANGE);

const playerScore = playerNumbers.length;
const playerWon = playerNumbers.length === MAX_PLAYER_TRIES;

if (playerWon) {
  alert(`Complimenti! Hai vinto! Il tuo punteggio è: ${playerScore}`);
} else {
  alert(`Peccato, hai beccato una bomba! Il tuo punteggio è: ${playerScore}`);
}
