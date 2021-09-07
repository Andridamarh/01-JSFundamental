// Day 02 Soal 02
function tagihanKomik(startDate, endDate, komik) {
  const tglPinjam = new Date(startDate);
  const tglBalik = new Date(endDate);

  if (tglPinjam.toString().includes(`Invalid Date`)) {
    return `${tglPinjam} tidak valid`;
  }

  if (tglBalik.toString().includes(`Invalid Date`)) {
    return `${tglBalik} tidak valid`;
  }

  if (komik > 10) {
    return `Komik hanya bisa pinjam max 10`;
  }

  const selisihDate = tglBalik - tglPinjam;
  const millisPerDay = 1000 * 60 * 60 * 24;
  let countDay = selisihDate / millisPerDay;

  return `Total Hari = ${countDay}
Total Komik = ${komik} * 2500
--------------------------
Total Tagihan = Rp. ${countDay * (komik * 2500)}`;
}

console.log(tagihanKomik("09-03-2021", "09-06-2021", 10));