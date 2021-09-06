function getDays(month, year) {
  if (isNaN(month) && isNaN(year)) {
    return `inputan bulan & tahun harus integer`;
  } else if (isNaN(month)) {
    return `inputan bulan harus integer`;
  } else if (isNaN(year)) {
    return `inputan tahun harus integer`;
  } else if (month === 2) {
    const cekKabisat = year % 4;
    if (cekKabisat === 0) {
      return `Bulan ini memiliki 29 hari, ${year} adalah tahun kabisat`;
    } else {
      return `Bulan ini memiliki 28 hari, pada tahun ${year}`;
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return `Bulan ini memiliki 30 hari, pada tahun ${year}`;
  } else {
    return `Bulan ini memiliki 31 hari, pada tahun ${year}`;
  }
}

console.log(getDays(8, 2021));
