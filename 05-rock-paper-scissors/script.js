function computerPlay() {
  const things = ["rock", "paper", "scissors"];
  const thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}

const getLoserElement = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function playRound(playerSelection, computerSelection) {
  if (getLoserElement[playerSelection] === computerSelection) {
    return "player";
  }
  return "computer";
}

module.exports = {
  computerPlay,
  playRound,
};
