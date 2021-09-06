function sumDigit(angka) {
  angkastr = angka.toString();

  if (isNaN(angka)) {
    return `${angka} bukan angka`;
  } else if (angka >= 10000) {
    return `${angka} harus lebih kecil dari 10000`;
  }

  const hasil =
    parseInt(angkastr.charAt(0)) +
    parseInt(angkastr.charAt(1)) +
    parseInt(angkastr.charAt(2)) +
    parseInt(angkastr.charAt(3));

  return `Sum Digit = ${hasil}`;
}

console.log(sumDigit("10000"));
