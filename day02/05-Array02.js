// Sorting array
const numbers = [34,2,3,54,223,65];
const sortnumber = numbers.sort((a,b) => b-a);

// sorting string
const foods = ["sup","pizza","pasta","anggur","baso","chiki"];
const sortfoods = foods.sort();
const descFoods = foods.reverse();
const sortFoods2 = foods.sort((a,b) => a > b ? 1 : -1);
const descFoods2 = foods.sort((a,b) => a > b ? -1 : 1);
console.log();