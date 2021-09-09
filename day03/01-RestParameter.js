function cetakAngka(n1, n2, n3, n4) {
  return n1 + " " + n2 + " " + n3 + " " + n4;
}

function cetakNumber(...numbers) {
  const arrNums = numbers
  return arrNums;
}

function sumNumber(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum
}

console.log(cetakAngka(1, 2, 5, 4));
console.log(cetakNumber(5, 3, 4, 4, 6));
console.log(sumNumber(1, 2, 5, 4)); 
