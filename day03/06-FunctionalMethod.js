const programming = ["java","js","python","golang","sql","oracle","postgres"];
const programming2 = ["java","sql","js","python","golang","sql","oracle","java","postgres"];

const oracle = programming.indexOf("oracle");//cari index ke brp
const postgres = programming.lastIndexOf("golang");//cari index ke brp dari terakhir
const java = programming.includes("java");//true or false

const sql2 = programming2.indexOf("sql");//cari index ke brp dari awal [0]
const java2 = programming2.lastIndexOf("java");//cari index ke brp dari terakhir [-1]
const javainc2 = programming2.includes("java");//true or false

// searching by find first match
const nums =[2,4,19,15,198,7,1,1];
const bigNums = nums.find(element => element > 10);

// menampilkan element yg lebih dari 10
const bigBigNums = nums.filter(element => element > 10);

// method map
const numbers = [2,3,4,5,6,10,15];
const byFive = numbers.map(element=> element * 5);

// every = melakukan pengecekan tiap array sesuai kondisi
// mengembalikan False jika tidak dan return True jika memenuhi
const every = numbers.every(element => element % 2 === 0)

// some = sama seperti every tapi return True jika salah satu memenuhi kondisi
// return False jika tidak ada sama sekali
const some = numbers.some(element => element % 2 === 0)

console.log();