function convertToRupiah(value, currencyType) {
  if (currencyType === `yen`) {
    convertValue = value * 130.12;
    return `${value} ${currencyType} = Rp. ${convertValue}`;
  } else if (currencyType === `usd`) {
    convertValue = value * 14282.5;
    return `${value} ${currencyType} = Rp. ${convertValue}`;
  } else if (currencyType === `euro`) {
    convertValue = value * 16000;
    return `${value} ${currencyType} = Rp. ${convertValue}`;
  } else {
    return `no match currency type`;
  }
}

console.log(convertToRupiah(100, "euro"));
