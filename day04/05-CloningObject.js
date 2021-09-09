// clonning object

const employee = {
    firstName : "John",
    lastName : "Wick",
    salary : 5000,
    portofolio : {
        ipk : 3.45,
        skill : ["Java","Oracle"]
    }
}

// older version clonning object
const person = Object.assign({},employee);

// cloning object menggunakan spread operator
const emps = {...employee};

// destructure object / extract properties ke variable
const {firstName,lastName,salary,portofolio : {ipk,skill}} = employee;
console.log("firstName : "+firstName);

const arr1 = []

console.log();