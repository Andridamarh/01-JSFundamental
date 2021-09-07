// Day 02 Soal 05b

let a = 5;
let b = 5;

for (let y = 1; y <= a; y++) {
  let s = "";
  for (let x = 1; x <= b; x++) {
    s = x + " " + s;
  }
  console.log(s);
  b--;
}
