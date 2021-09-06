// regular function

// function namaFunc(namaInput,....,namaInputx){}
// input function console.log(namaFunc(inputFunc,....,inputFuncx));

function ATM(money) {
  let sisa, limaPuluhRb, duaPuluhrb, sepuluhRb, limaRb;

  if (isNaN(money)) {
    return `${money} is not a number`;
  }

  limaPuluhRb = parseInt(money / 50000);
  sisa = money % 50000;

  duaPuluhrb = parseInt(sisa / 20000);
  sisa = sisa % 20000;

  sepuluhRb = parseInt(sisa / 10000);
  sisa = sisa % 10000;

  limaRb = parseInt(sisa / 5000);
  sisa = sisa % 5000;

  return `\tRp. 50rb = ${limaPuluhRb} lembar
        Rp. 20rb = ${duaPuluhrb} lembar
        Rp. 10rb = ${sepuluhRb} lembar
        Rp. 5rb = ${limaRb} lembar`;
}

console.log(ATM("115000"));