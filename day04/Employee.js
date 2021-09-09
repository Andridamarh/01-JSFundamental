// create Class, template untuk mengcreate object employee

export default class Employee {
  constructor(
    firstName,
    lastName,
    salary = 0,
    skill = [],
    status = "Permanent",
    portofolio = { ipk: 1 }
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.skill = skill;
    this.status = status;
    this.portofolio = portofolio;
  }

  // create function di class employee
  toStringTes() {
    return `${this.firstName} ${this.lastName} salary = Rp.${this.salary}`;
  }
}

class Contract extends Employee {
  constructor(
    firstName,
    lastName,
    salary = 0,
    skill = [],
    status = "Permanent",
    portofolio = { ipk: 1 },
    xtraTime = 500
  ) {
    super(firstName,lastName,salary,skill,status,portofolio);
    this.xtraTime = xtraTime;
  }

// membuat function dalam class
// super adalah mengakses dari class yg diatasnya lagi(master/default) contoh disini Class Employee
  toStringTes(){
    return super.toStringTes()+` uang lembur : ${this.xtraTime}, total gaji = ${this.salary+this.xtraTime}`
  }
}

// jika sudah ada export default, export {Class1,......,Classn}
export {Contract}

// object instance, emp1 udah di create di memory

// const emp1 = new Employee("john","black");
/* const emp1 = new Employee("john", "black", 5000, ["java", "oracle"]);
const emp2 = new Employee(
  "arya",
  "stark",
  4000,
  ["java", "oracle"],
  "Kontrak",
  { ipk: 3.0 }
);
const emp3 = new Employee("dian", "kang", 4500, ["c#"]);

const listEmployee = [emp1, emp2, emp3];

console.log(emp1.toStringTes());

console.log(); */
