// Day 03 Soal 03

let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Jambu", "Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];
let fruitsCopy = [...fruits];

//a

fruitsCopy.push("Anggur", "Banana", "Sirsak");
console.log(`a = [${fruitsCopy}]`);

//b

fruitsCopy.pop();
console.log(`b = [${fruitsCopy}]`);

//c

fruitsCopy.splice(2, 1);
console.log(`c = [${fruitsCopy}]`);

//d

fruitsCopy.splice(2, 3);
console.log(`d = [${fruitsCopy}]`);

//e

fruitsCopy.splice(2, 0, "Rambutan", "Bengkuang");
console.log(`e = [${fruitsCopy}]`);

//f

fruitsCopy.splice(4, 1, "Nangka");
console.log(`f = [${fruitsCopy}]`);

//g

const vege = fruits.concat(sayur);
console.log(`g = [${vege}]`);

//h

const vegeReverse = [...vege].reverse();
console.log(`h = [${vegeReverse}]`);

//i

function switchIndex(arrInput, input1, input2) {
  const formInput1 = input1[0] + input1.slice(1).toLowerCase();
  const formInput2 = input2[0] + input2.slice(1).toLowerCase();

  const index1 = arrInput.indexOf(formInput1);
  const index2 = arrInput.indexOf(formInput2);

  vege.splice(index2, 1, input1);
  vege.splice(index1, 1, input2);

  return `i = [${vege}]`;
}

console.log(switchIndex(vege, "TOMAT", "JERUK"));

console.log();

