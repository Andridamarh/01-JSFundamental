// Final Tes soal 04

// a

let str = ``;

for (let i = 0; i <= 6; i++) {
  for (let j = 1; j <= i + 1; j++) {
    str = str + (j + i) + " ";
  }
  str = str + `\n`;
}

// b

let str2 = ``;

for (let i = 0; i <= 6; i++) {
  for (let j = 5; j <= i + 5; j++) {
    str2 = str2 + (j + i) + " ";
  }
  str2 = str2 + `\n`;
}

console.log(str);
console.log(str2);
