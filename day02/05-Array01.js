// init array
const emptyArray = [];

const foods = ["sup","burger","hotdog"];

// add element di lastindex
foods.push("indomie");
// hapus element di lastindex
foods.pop();

// add element di firstindex
foods.unshift("baso");
// hapus element di firstindex
foods.shift();

// display with index
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

// display by looping
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

//split array
const s = "bootcamp codeid academy";
const arr = s.split(" ");

console.log();