/*
    nama = "codeid"
    randomPassword = "ocided"
*/

//split string 
//const myname = "codeid".split("");

//mengacak urutan
const myname = "codeid"
const random = Math.random() * 10;

const password = myname.charAt(Math.random()*myname.length)+
myname.charAt(Math.random()*myname.length)+
myname.charAt(Math.random()*myname.length)+
myname.charAt(Math.random()*myname.length)+
myname.charAt(Math.random()*myname.length)+
myname.charAt(Math.random()*myname.length)
;
console.log(password);

console.log();

//const password = myname