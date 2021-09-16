// Final Tes soal 03

const array1 = [
  "Mangga",
  "Apel",
  "Melon",
  "Pisang",
  "Sirsak",
  "Tomat",
  "Nanas",
  "Nangka",
  "Timun",
  "Mangga",
];
const array2 = [
  "Bayam",
  "Wortel",
  "Kangkung",
  "Mangga",
  "Tomat",
  "Kembang Kol",
  "Nangka",
  "Timun",
];

function compareStr(arrIn1, arrIn2) {
  let arr1 = [...new Set(arrIn1)];
  let arr2 = [...new Set(arrIn2)];
  let arrSame = [];
  let arrDiff = [...new Set([...arr1, ...arr2])];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arrSame.push(arr1[i]);
      }
    }
  }

  for (let i = 0; i < arrSame.length; i++) {
    for (let j = 0; j < arrDiff.length; j++) {
      if (arrSame[i] === arrDiff[j]) {
        arrDiff.splice(j, 1);
      }
    }
  }

  return `
    Same = [${arrSame}]
    Different = [${arrDiff}]
    `;
}
console.log(compareStr(array1, array2));
