// import class 

import Employee, { Contract } from "./Employee.js";

const emp1 = new Employee("john", "black", 5000, ["java", "oracle"]);
const emp2 = new Employee(
  "arya",
  "stark",
  4000,
  ["java", "oracle"],
  "Kontrak",
  { ipk: 3.0 }
);
const emp3 = new Employee("dian", "kang", 4500, ["c#"]);
const kontrak1 = new Contract(
  "Sule",
  "Eman",
  3500,
  ["komedian", "actor"],
  "Kontrak",
  { ipk: 2.0 },
  1000
);

const listEmployee = [emp1, emp2, emp3,kontrak1];

const kontrak = listEmployee.filter((el) => el.status === "Kontrak");
console.log(kontrak);
console.log(kontrak1.toStringTes());

const totalGaji = listEmployee.reduce((sum, el) => sum + el.salary, 0);
console.log(`Total Gaji = ${totalGaji}`);

console.log();
