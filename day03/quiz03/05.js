// Day 03 Soal 05

const numbers = [2, 42, 5, 304, 103, 13];

function maxNumber(n) {
  let result = Math.max(...n);
  return result
}

console.log(maxNumber(numbers));


// ******************sebelumnya******************

// const numbers = [2, 42, 5, 304, 103, 13];

// function maxNumber(n) {
//   let max = 0;
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] > max) {
//       max = n[i];
//     }
//   }
//   return max;
// }

// console.log(maxNumber(numbers));