function isPalindrome(angka) {
  const angkastr = angka.toString();

  if (isNaN(angkastr)) {
    return `${angka} is not a number`;
  } else if (angkastr.charAt(0) === angkastr.charAt(3) && angkastr.charAt(1) === angkastr.charAt(2)) {
    return `${angka} is palindrome`;
  } else {
    return `${angka} is not palindrome`;
  }
}

console.log(isPalindrome(8899));
