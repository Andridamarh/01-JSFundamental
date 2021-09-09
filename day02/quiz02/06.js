// Day 02 Soal 06

function showPrimeNumber(n) {
  let prime = "";
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (checkPrime(i)) {
      prime = count % 5 === 0 ? prime + "\n" + i : prime + "\t" + i;
      count++;
    }
  }
  return prime;
}

function checkPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;

}

console.log(showPrimeNumber(100));
