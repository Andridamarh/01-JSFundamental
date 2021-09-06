function getPeriodTimes(detik) {
  let sisa, hari, jam, menit;

  if (isNaN(detik)) {
    return `${detik} bukan angka`;
  }

  hari = parseInt(detik / 86400);
  sisa = detik % 86400;

  jam = parseInt(sisa / 3600);
  sisa = sisa % 3600;

  menit = parseInt(sisa / 60);
  sisa = sisa % 60;

  return `${hari} hari ${jam} jam ${menit} menit ${sisa} detik`;
}

console.log(getPeriodTimes("86400"));
