function getSalesDiskon(harga, pajak, diskon) {
  if (isNaN(harga) && isNaN(pajak) && isNaN(diskon)) {
    return `Harga, Pajak & Diskon harus dalam angka`;
  } else if (isNaN(harga)) {
    return `Harga harus dalam angka`;
  } else if (isNaN(pajak)) {
    return `Pajak harus dalam angka`;
  } else if (isNaN(diskon)) {
    return `Diskon harus dalam angka`;
  }

  const hargaDiskon = harga * (diskon / 100);
  const hargaAfterDiskon = harga - hargaDiskon;
  const hargaPajak = hargaAfterDiskon * (pajak / 100);
  const totalBayar = hargaAfterDiskon + hargaPajak;

  return `\tTotal Sales \t: Rp. ${harga}
        Discount(${diskon}%) \t: Rp. ${hargaDiskon}
        Harga - Diskon \t: Rp. ${hargaAfterDiskon}
        Pajak (${pajak}%) \t: Rp. ${hargaPajak}
        -------------------------------------------
        Total Harga \t: Rp. ${totalBayar}`;
}

console.log(getSalesDiskon(4500, 10, 5));
