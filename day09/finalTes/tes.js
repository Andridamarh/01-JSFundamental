// Final Tes soal 03

let array1 = [
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
let array2 = [
  "Bayam",
  "Wortel",
  "Kangkung",
  "Mangga",
  "Tomat",
  "Kembang Kol",
  "Nangka",
  "Timun",
];

array2.splice(1,1)



let array3 = [...new Set([...array1, ...array2])];


console.log();
