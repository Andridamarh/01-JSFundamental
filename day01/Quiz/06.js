function getCordinat(x1, y1, x2, y2) {
  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    return `Input kordinat dalam angka`;
  }

  const x = x1 - x2;
  const y = y1 - y2;
  const kartesius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  return `Kordinat Kartesius = ${kartesius}`;
}

console.log(getCordinat(4, 3, -8, 5));
