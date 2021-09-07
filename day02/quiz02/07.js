// Day 02 Soal 07

function isCharsUnique(input) {
  const inputArr = input.split("");
  for (let i = 0; i < inputArr.length; i++) {
    for (let x = i+1; x < inputArr.length; x++) {
      if (inputArr[i] === inputArr[x]) {
        return `false, karena ${inputArr[i]} duplikat`;
      }
    }
  }

  return `true`
}

console.log(isCharsUnique("abcdefg"));
