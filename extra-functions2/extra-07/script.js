function purchase(inventary, item) {
  if (inventary.includes(item)) {
    return "Hola";
  }
  return "no";
}

console.log(purchase(["bolso", "zapato", "camisa"], "zapato"));
