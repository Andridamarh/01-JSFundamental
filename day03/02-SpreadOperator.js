const numbers = [3,4,5,6,7];
// spread operator selalu disimpan di sebelah kanan
const numberCopy = [...numbers];

numbers.push(10);

// mergin two array
const ganjil = [1,3,5,7]
const genap = [2,4,6,8]
// large array concat
const bilangan = ganjil.concat(genap).sort();

// spread operator bisa ditampilkan degan element lain
const gage = [...ganjil,...genap,9,10,11];

console.log(); 