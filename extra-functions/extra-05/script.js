function calcAverage(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  const average = sum / numbers.length;
  return average;
}
console.log(calcAverage([1, 3, 8, 3]));
