function calculateDistance(a, t) {
  if (a <= 0 || t <= 0) {
    return `Acceleration or time must be >=0`;
  } else if (isNaN(a) || isNaN(t)) {
    return `Input must be a number`;
  }

  const distance = 0.5 * a * Math.pow(t, 2);

  return `Jarak yang ditempuh adalah ${distance} meter/s`;
}

console.log(calculateDistance("a", "t"));
