const programming = ["java","js","python","golang","sql","oracle","postgres"];

// get index sql = 4
const sql = programming.indexOf("sql");
// menghapus element mulai dari index ke 4 s/d terakhir
// programming.splice(sql);

// console.log(programming.splice(sql,2));

// menghapus element di index ke 4 s/ index 5, insert 2 element baru
console.log(programming.splice(4,2,".NET","sqlserver"));

// menambah tanpa menghapus di index 4
console.log(programming.splice(4,0,".NET","sqlserver"));
 
console.log();


// rekomend untuk tidak splice dari Array original
// lebih baik membuat array baru dari original dan splice melalui array yg baru dibuat