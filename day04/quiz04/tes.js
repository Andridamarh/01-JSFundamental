import Product from "./Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "Dell Ultrabook", "COMPUTER", 7850000, 2);

const list = [prod1, prod2];
let str = '';

function showAll(arrIn) {
  for (let i = 0; i < arrIn.length; i++) {
    str = str + arrIn[i].showAllProduct();
  }
  return str
}

const try1 = list.showAllProduct()

console.log(showAll(list));

console.log();
 