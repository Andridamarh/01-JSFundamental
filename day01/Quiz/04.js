function getSalesTax(price, tax) {
  if (isNaN(price) && isNaN(tax)) {
    return `Price & Tax must be a number`;
  } else if (isNaN(price)) {
    return `Price must be a number`;
  } else if (isNaN(tax)) {
    return `Tax must be a number`;
  }

  const totalPrice = price * (tax / 100);

  return `\tPrice \t: Rp. ${price}
        Tax \t: ${tax}%
        Total Price : Rp. ${price + totalPrice}`;
}

console.log(getSalesTax(4500, 5));
