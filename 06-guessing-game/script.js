const { prompt } = require("enquirer");

function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

async function main() {
  let count = 0;
  const computerChoice = getRandomNumber();
  while (true) {
    const response = await prompt({
      type: "input",
      name: "userInput",
      message: "Guess the number",
    });
    if (response.userInput === "exit") {
      console.log("bye");
      break;
    }
    const playerChoice = +response.userInput;
    if (playerChoice < computerChoice) {
      console.log("The number was too low, try again");
    } else {
      console.log("The number was too high, try again");
    }
    count++;
    if (playerChoice === computerChoice) {
      console.log(
        `You won, the correct number was ${computerChoice}. You tried ${count} times`
      );
      break;
    }
  }
}
main();

module.exports = {
  getRandomNumber,
};
