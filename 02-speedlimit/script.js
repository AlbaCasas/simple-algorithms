function checkSpeedLimit(speed) {
  if (speed <= 70) {
    return "Good safe driving";
  }
  const penaltyPoint = Math.floor((speed - 70) / 5);
  if (penaltyPoint < 10) {
    return `Your penalty points are ${penaltyPoint}`;
  }
  return "License suspended";
}
