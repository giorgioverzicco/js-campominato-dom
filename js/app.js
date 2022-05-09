const MAX_BOMBS = 16;
const MAX_PLAYER_TRIES = 100 - MAX_BOMBS;

const bombs = [];
const playerNumbers = [];

let playerScore = 0;

// generate X random numbers to act as bombs
while (bombs.length < MAX_BOMBS) {
  const rand = Math.floor(Math.random() * 100) + 1;

  if (!bombs.includes(rand)) {
    bombs.push(rand);
  }
}
