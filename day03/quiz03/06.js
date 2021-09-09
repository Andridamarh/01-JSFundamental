// Day 03 Soal 06

const cities = [
  "merak",
  "tangerang",
  "jakarta",
  "bogor",
  "cianjur",
  "cimahi",
  "bandung",
];

function citiesSlice(arrays, cityBetween) {
  const indexCity = arrays.indexOf(cityBetween);
  const citySlice = [
    ...arrays.slice(0, indexCity),
    ...arrays.slice(indexCity + 1),
  ];
  return citySlice;
}

console.log(citiesSlice(cities, "bogor"));
console.log(citiesSlice(cities, "jakarta"));

// **********Menggunakan Splice**********
// function citiesSlice(arrays, cityBetween) {
//   arrays.splice(arrays.indexOf(cityBetween), 1);

//   return arrays;
// }

