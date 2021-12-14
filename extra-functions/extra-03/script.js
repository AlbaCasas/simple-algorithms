function isLongerThan(number, text) {
  if (text.length > number) {
    return true;
  }
  return false;
}
console.log(isLongerThan(2, "hello"));
console.log(isLongerThan(5, "hello"));
