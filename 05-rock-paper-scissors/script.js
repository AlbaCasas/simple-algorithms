const { prompt } = require("enquirer");

function getComputerChoice() {
  const things = ["rock", "paper", "scissors"];
  const thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}

function getWinner(playerSelection, computerSelection) {
  const getLoserElement = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (getLoserElement[playerSelection] === computerSelection) {
    return "player";
  }
  return "computer";
}

async function main() {
  let countPlayer = 0;
  let countComputer = 0;
  for (let i = 0; i < 3; i++) {
    const response = await prompt({
      message: "Rock, paper or scissors",
      type: "select",
      choices: ["rock", "paper", "scissors"],
      name: "selectedItem",
    });
    const computerChoice = getComputerChoice();
    const playerChoice = response.selectedItem;
    const winner = getWinner(playerChoice, computerChoice);
    if (winner === "player") {
      countPlayer++;
    } else {
      countComputer++;
    }
    console.log(
      `The winner is ${winner}. Computer selected ${computerChoice}. Player selected ${playerChoice}`
    );
  }
  if (countComputer > countPlayer) {
    console.log("Computer wins", { countComputer, countPlayer });
  } else {
    console.log("Player wins", { countComputer, countPlayer });
  }
}

main();

module.exports = {
  getComputerChoice,
  getWinner,
};
