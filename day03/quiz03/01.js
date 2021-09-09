// Day 03 Soal 01

function countValley(input) {
  let gunung = 0;
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "U") {
      count++;
    }

    if (input[i] === "D") {
      count--;
    }

    if (count === 0 && input[i] === "U") {
      gunung++;
    }
  }

  return `${gunung} gunung`;
}

// console.log(countValley("UDDDUDUU"));
console.log(countValley("UUDDDDUDUUDUDUUDUUDD"));

// ******************sebelumnya******************

// function countValley(input) {
//   let sealvl = 0;
//   let gunung = 0;
//   let count = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === "U" && sealvl === 0) {
//       count++;
//       sealvl = 1;
//     } else if (input[i] === "U") {
//       count++;
//     }

//     if (input[i] === "D" && sealvl === 0) {
//       count--;
//       sealvl = -1;
//     } else if (input[i] === "D") {
//       count--;
//     }

//     if (count === 0 && sealvl === 1) {
//       gunung++;
//       sealvl = 0;
//     } else if (count === 0 && sealvl === -1) {
//       sealvl = 0;
//     }
//   }

//   return `${gunung} gunung`;
// }

// console.log(countValley("UDDDUDUU"));

