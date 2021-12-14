function getFirstWord(text) {
  const wordsList = text.split(" ");
  return wordsList[0];
}

console.log(getFirstWord("hola soy un texto"));
