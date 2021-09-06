function getPersentase(income1, income2) {
  if (isNaN(income1) || isNaN(income2)) {
    return `Input harus dalam angka`;
  }

  const perbedaan = income2 - income1;
  const hasil = (perbedaan * 100) / income1;
  return `${hasil}%`;
}

console.log(getPersentase(75000, 65000));
