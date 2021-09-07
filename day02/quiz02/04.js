// Day 02 Soal 04
function howManyKabisat(tahun1, tahun2) {
  let cekKabisat = "";
  let countKabisat = 0;
  for (let i = tahun1; i <= tahun2; i++) {
    if (i % 400 === 0 || (i % 100 !== 0 && i % 4 === 0)) {
      cekKabisat = cekKabisat + " " + i;
      countKabisat++;
    }
  }

  return `Total Tahun Kabisat : ${countKabisat} hari =${cekKabisat}`;
}

console.log(howManyKabisat(1997, 2021));
console.log();
