// Day 02 Soal 08

function isPalindrome(input) {
    const inputCase = input.toUpperCase();

    for (let i = 0; i < inputCase.length/2; i++) {
      if (inputCase[i] !== inputCase[inputCase.length - 1 - i]) {
        return `tidak palindrome`;
      }
    }
    return `Palindrome`;
  }
  
  console.log(isPalindrome("kasur ini rUSak"));
  
// Sebelum ganti

/* function isPalindrome(input) {
  const inputArr = input.toUpperCase().split("");

  for (let i = 0; i < inputArr.length/2; i++) {
    if (inputArr[i] !== inputArr[inputArr.length - 1 - i]) {
      return `tidak palindrome`;
    }
  }
  return `Palindrome`;
}

console.log(isPalindrome("kasur ini rUsak")); */