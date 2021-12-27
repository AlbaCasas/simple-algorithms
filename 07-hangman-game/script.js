const { prompt } = require("enquirer");

function getRandomWord() {
  const items = ["byes", "drain", "loser", "plethora"];
  const randomItem = items[Math.floor(Math.random() * items.length)];
  return randomItem;
}

function getClue(word) {
  const characters = [];
  for (let i = 0; i < word.length; i++) {
    characters.push("_");
  }
  return characters;
}

async function main() {
  const word = getRandomWord();
  const clue = getClue(word);
  const charsTriedByUser = [];
  console.log("Welcome to hangman!!");
  console.log(clue);
  while (true) {
    const { userInput } = await prompt({
      type: "input",
      name: "userInput",
      message: "Guess your character",
    });
    if (userInput === "exit") {
      console.log("Byes!");
      break;
    }
    if (charsTriedByUser.includes(userInput)) {
      console.log("You can't repeat the same letter twice");
      continue;
    }
    charsTriedByUser.push(userInput);
    const position = word.indexOf(userInput);
    if (position === -1) {
      console.log("Incorrect");
      continue;
    }
    clue[position] = userInput;
    console.log(clue);
    if (clue.join("") === word) {
      console.log("You won!");
      break;
    }
  }
}

main();
