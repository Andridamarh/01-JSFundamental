// Day 02 Soal 11
function isPermute(input1, input2) {
  if (input1.length !== input2.length) {
    return `length tidak sama`;
  }

  const sortinput1 = input1.split("").sort();
  const sortinput2 = input2.split("").sort();
  for (let i = 0; i < input1.length; i++) {
    if (sortinput1[i] !== sortinput2[i]) {
      return `karakter tidak sama`;
    }
  }
  return `is Permutation`;
}

console.log(isPermute("bbb", "abb")); //true
