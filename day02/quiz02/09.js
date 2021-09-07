// Day 02 Soal 09
function maxWordLength(input) {
  const inputArr = input.split(" ");
  let max = "";

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].length > max.length) {
      max = inputArr[i];
    }
  }
  return `${max}`;  
}

console.log(maxWordLength("aku suka bootcamp sentul city"));
