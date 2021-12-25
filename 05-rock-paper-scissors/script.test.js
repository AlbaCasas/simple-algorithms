const { computerPlay } = require("./script");
const { playRound } = require("./script");

test("computerPlay returns rock, paper, or scissors", () => {
  expect(["rock", "paper", "scissors"]).toContain(computerPlay());
});

describe("playRound returns player", () => {
  test("player: rock - computer: scissors", () => {
    expect(playRound("rock", "scissors")).toBe("player");
  });
  test("player: scissors - computer: paper", () => {
    expect(playRound("scissors", "paper")).toBe("player");
  });
  test("player: paper - computer: rock", () => {
    expect(playRound("paper", "rock")).toBe("player");
  });
});

describe("playRound returns computer", () => {
  test("player: scissors - computer: rock", () => {
    expect(playRound("scissors", "rock")).toBe("computer");
  });
  test("player: paper - computer: scissors", () => {
    expect(playRound("paper", "scissors")).toBe("computer");
  });
  test("player: rock - computer: paper", () => {
    expect(playRound("rock", "paper")).toBe("computer");
  });
});
