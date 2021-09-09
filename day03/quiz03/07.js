// Day 03 Soal 07

const dates = [
  new Date(2021, 10, 20),
  new Date(2019, 3, 12),
  new Date(2020, 5, 23),
  new Date(2022, 3, 18),
];

function matchingDate(arrInput, yearInput) {
  for (let i = 0; i < arrInput.length; i++) {
    if (arrInput[i].getFullYear() === yearInput) {
      return arrInput[i];
    }
  }
  return `Tidak ditemukan`;
}

console.log(matchingDate(dates, 2020));

// ******************sebelumnya******************

// const dates = [
//   new Date(2021, 10, 20),
//   new Date(2019, 3, 12),
//   new Date(2020, 5, 23),
//   new Date(2022, 3, 18),
// ];

// function matchingDate(arrInput, yearInput) {
//   for (let i = 0; i < arrInput.length; i++) {
//     if (arrInput[i].getFullYear() === yearInput) {
//       return arrInput[i];
//     }
//   }
//   return `Tidak ditemukan`;
// }

// console.log(matchingDate(dates, 2020));
