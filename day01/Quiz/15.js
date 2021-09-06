function getGajiKaryawan(gaji1, gaji2, gaji3) {
  if (isNaN(gaji1) || isNaN(gaji2) || isNaN(gaji3)) {
    return `Masukkan Angka`;
  }

  const p1 = 2;
  const p2 = 5;
  const p3 = 10;

  const k1 = parseInt(gaji1 + gaji1 * (p1 / 100));
  const k2 = parseInt(gaji2 + gaji2 * (p2 / 100));
  const k3 = parseInt(gaji3 + gaji3 * (p3 / 100));
  const totalGaji = k1 + k2 + k3;

  return `\tTotal Gaji yang harus bayar :
    \tEmp1 : Rp. ${gaji1} + Pajak(${p1}%) = Rp. ${k1}
    \tEmp2 : Rp. ${gaji2} + Pajak(${p2}%) = Rp. ${k2}
    \tEmp3 : Rp. ${gaji3} + Pajak(${p3}%) = Rp. ${k3}
    \tTotal : Rp. ${totalGaji}`;
}

console.log(getGajiKaryawan(500, 2000, 12000));
