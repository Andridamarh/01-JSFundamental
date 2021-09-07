// copy array

const employees = ["andi","charlie","delta","gita","hari","zeni"];

// same references
const empsAll = employees;

employees.push("iqbal");

// copy array
const permanent = Array.of(employees);

const freelances = ["dian","budi"];

// concat array
const contractEmps = permanent.concat(freelances);

contractEmps.length = 0;

console.log();