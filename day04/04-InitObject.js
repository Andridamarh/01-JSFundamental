// declaration object
const blankObject ={};
const blankObject2 = new Object()

if(Object.keys(blankObject).length === 0){
    console.log("is blank object");
}

const employee = {
    firstName : "John",
    lastName : "Wick",
    salary : 5000
}

Object.freeze(employee);

employee.firstName = "John";
employee.lastName = "Snow";
employee.salary = 7500;

if(Object.isFrozen(employee)){
    console.log("Employee status frozen");
}

const address = {
    street : "Jl. Limboto 20",
    city : "Bogor"
}

const employeeInfo = {...employee,...address};
employeeInfo.firstName = "Rex";

// jangan gunakan tanpa spread operator seperti bawah
// me-refer address memory yang sama
const emps = {employee,address};


console.log();