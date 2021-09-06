function getAreaCircle(radius) {
  const n = 3.14159;

  if (radius <= 0) {
    return `radius ${radius} <= 0, try higher`;
  } else if (isNaN(radius)) {
    return `Inputan harus dalam angka`;
  }

  const areaCircle = n * Math.pow(radius, 2);

  return `Area Circle = ${areaCircle}`;
}

console.log(getAreaCircle("5"));
