function purchase(inventary, item) {
  if (inventary.includes(item)) {
    return "Successful purchase";
  }
  return "Item does not exist in inventary";
}

console.log(purchase(["bolso", "zapato", "camisa"], "zapato"));
