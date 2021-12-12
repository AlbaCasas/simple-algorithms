function getHighestNumber(numbers) {
  numbers.sort((a, b) => {
    return a - b;
  });
  return numbers.pop();
}
