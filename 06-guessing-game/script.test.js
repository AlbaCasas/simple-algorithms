const { expect } = require("@jest/globals");
const { getRandomNumber } = require("./script");
test("getRandomNumber return number between 1 and 9", () => {
  const number = getRandomNumber();
  expect(number).toBeGreaterThan(0);
  expect(number).toBeLessThan(10);
});
