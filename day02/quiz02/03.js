// Day 02 Soal 03
function payment(tglBayar, tglJatuhTempo, cicilan) {
  if (cicilan !== 3500000) {
    return `Angsuran anda kurang dari Rp. 3.500.000 silahkan isi sesuai angsuran`;
  }

  const convTglBayar = new Date(tglBayar);
  const convTglTempo = new Date(tglJatuhTempo);
  const selisihDate = convTglTempo - convTglBayar;
  const millisPerDay = 1000 * 60 * 60 * 24;
  let countDay = selisihDate / millisPerDay;

  if (countDay > 5) {
    return `Tagihan bulan ${convTglTempo.getMonth() + 1} belum tersedia`;
  }

  let denda = "0";
  let telatHari = "0";

  if (countDay < 0) {
    denda = ((cicilan * 2) / 1000) * Math.abs(countDay);
    telatHari = Math.abs(countDay);
  }

  return `  ----------------------------
  Tanggal Bayar = ${tglBayar}
  Jatuh Tempo = ${tglJatuhTempo}
  ----------------------------
  Tagihan bulan ${
    convTglTempo.getMonth() + 1},${convTglTempo.getFullYear()} = Rp. ${cicilan}
  Denda = Rp. ${denda} (terlambat ${telatHari} hari)
  ----------------------------
  Total = Rp. ${cicilan + denda}`;
}

console.log(payment("09/25/2021", "09/27/2021", 3500000));
