// Final Tes soal 01

function totalLompat(x, y, k) {
  let l = 0;
  let a = x;

  while (a < y) {
    a = a + k;
    l++;
  }

  return l;
}

console.log(totalLompat(10, 85, 30));
