// Day 02 Soal 10
function findSum(arrInput, targetOutput) {
  for (let i = 0; i < arrInput.length; i++) {
    for (let x = i + 1; x < arrInput.length; x++) {
      if (arrInput[i] + arrInput[x] === targetOutput) {
        return `${arrInput[i]}+${arrInput[x]} = ${targetOutput}`;
      }
    }
  }
}

console.log(findSum([1, 2, 3, 4, 5], 6)); // 4 & 5, 4+5 = 9
