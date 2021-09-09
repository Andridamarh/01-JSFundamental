// clonning object shallow

const employee = {
    firstName : "John",
    lastName : "Wick",
    salary : 5000,
    skill : ["java","Oracle","nodejs"]
}

const programmer = {...employee};
// programmer.skill[1] = "postgres";

programmer.skill = [...programmer.skill];
programmer.skill[1] = "postgres";

console.log();