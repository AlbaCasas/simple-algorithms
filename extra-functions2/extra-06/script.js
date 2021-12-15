function sumOrSubstract(number1, number2, text) {
  if (text === "add") {
    return number1 + number2;
  } else if (text === "substract") {
    return number1 - number2;
  }
  return "invalid input";
}

console.log(sumOrSubstract(23, 9, "add"));
