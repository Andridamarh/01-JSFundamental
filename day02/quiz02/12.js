// Day 02 Soal 12
const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];
const fruitNamesD = ["anggurmerah", "apel", "mangga", "alpukat"];
const fruitNamesE = ["anggurmerah", "apel"];

function isArraysEqual(inputArr1, inputArr2) {
  if (inputArr1.length !== inputArr2.length) {
    return `Length array tidak sama`;
  }

  for (let i = 0; i < inputArr1.length; i++) {
    if (inputArr1[i] !== inputArr2[i]) {
      return `Element Array tidak sama`;
    }
  }

  return `Element Array sama`;
}

console.log(isArraysEqual(fruitNamesD, fruitNamesE));
