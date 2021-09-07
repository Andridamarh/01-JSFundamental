// Day 02 Soal 05a

let a = 6;
let b = 6;

for (let y = 1; y <= a; y++) {
  let s = "";
  for (let x = 1; x <= b; x++) {
    s = s + " " + x;
  }
  console.log(s);
  b--;
}
