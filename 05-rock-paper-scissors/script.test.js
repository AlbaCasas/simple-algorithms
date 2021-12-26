const { getWinner, getComputerChoice } = require("./script");

test("getComputerChoice returns rock, paper, or scissors", () => {
  expect(["rock", "paper", "scissors"]).toContain(getComputerChoice());
});

describe("getWinner returns player", () => {
  test("player: rock - computer: scissors", () => {
    expect(getWinner("rock", "scissors")).toBe("player");
  });
  test("player: scissors - computer: paper", () => {
    expect(getWinner("scissors", "paper")).toBe("player");
  });
  test("player: paper - computer: rock", () => {
    expect(getWinner("paper", "rock")).toBe("player");
  });
});

describe("getWinner returns computer", () => {
  test("player: scissors - computer: rock", () => {
    expect(getWinner("scissors", "rock")).toBe("computer");
  });
  test("player: paper - computer: scissors", () => {
    expect(getWinner("paper", "scissors")).toBe("computer");
  });
  test("player: rock - computer: paper", () => {
    expect(getWinner("rock", "paper")).toBe("computer");
  });
});
