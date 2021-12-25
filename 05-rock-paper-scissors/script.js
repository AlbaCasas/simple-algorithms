let playerWins = 0;
let machineWins = 0;

for (let round = 0; round < 3; round++) {
  playRoundAndGetWinner(prompt("Choose somethings"), computerPlay());
}

if (machineWins > playerWins) {
  alert(
    `Machine wins: Machine victories: ${machineWins}, Players victories: ${playerWins}`
  );
} else {
  alert(
    `players wins: Machine victories: ${machineWins}, Players victories: ${playerWins}`
  );
}

function computerPlay() {
  const things = ["rock", "paper", "scissor"];
  const thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}

function playRoundAndGetWinner(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  if (playerSelection === "rock" && computerSelection !== "paper") {
    alert(
      `player wins, player choose ${playerSelection} and machine chooses ${computerSelection}`
    );
    playerWins++;
  }
  if (playerSelection === "paper" && computerSelection !== "scissor") {
    alert(
      `player wins, player choose ${playerSelection} and machine chooses ${computerSelection}`
    );
    playerWins++;
  }
  if (playerSelection === "scissor" && computerSelection !== "rock") {
    alert(
      `player wins, player choose ${playerSelection} and machine chooses ${computerSelection}`
    );
    playerWins++;
  }
  alert(
    `machine wins, player choose ${playerSelection} and machine chooses ${computerSelection}`
  );
  machineWins++;
}
