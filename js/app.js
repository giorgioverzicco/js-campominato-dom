// ======================================
//   FUNCTIONS
// ======================================

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

function getStrFromDifficulty(difficulty) {
  if (difficulty === 0) {
    return "Facile";
  } else if (difficulty === 1) {
    return "Normale";
  }
  return "Difficile";
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

function getPlayerNumbers(bombs, maxTries, maxRandomRange) {
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

// ======================================
//   MAIN
// ======================================

const difficulty = getDifficulty();
const maxRange = getMaxRange(difficulty);
const maxBombs = 16;
const maxPlayerTries = maxRange - maxBombs;

const bombs = getBombs(maxBombs, maxRange);
const playerNumbers = getPlayerNumbers(bombs, maxPlayerTries, maxRange);

const playerScore = playerNumbers.length;
const playerWon = playerNumbers.length === maxPlayerTries;

if (playerWon) {
  alert(`Complimenti! Hai vinto! Il tuo punteggio è: ${playerScore}`);
} else {
  alert(`Peccato, hai beccato una bomba! Il tuo punteggio è: ${playerScore}`);
}

// DOM
const statDifficulty = document.getElementById("difficulty");
statDifficulty.innerHTML += getStrFromDifficulty(difficulty);

const statScore = document.getElementById("score");
statScore.innerHTML += playerScore;

const row = document.getElementById("cellsRow");
for (let i = 0; i < maxRange; i++) {
  const cell = document.createElement("div");
  cell.id = `cell-${i + 1}`;
  cell.classList.add("cell");
  row.append(cell);
}
