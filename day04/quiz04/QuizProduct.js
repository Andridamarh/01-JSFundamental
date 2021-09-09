// 1

import Product from "./Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "Dell Ultrabook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "Iphone 12", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);
const prod6 = new Product(6, "Samsam");

// 2
const listProducts = [prod1, prod2, prod3, prod4, prod5];

function addProduct(product) {
  listProducts.push(product);
  return product;
}

console.log(addProduct(prod6));

// 3

/* let str = '';

function showAllProduct(arrIn) {
  for (let i = 0; i < arrIn.length; i++) {
    str = str + arrIn[i].showAllProduct();
  }
  return str
}

console.log(showAllProduct(listProducts)); */

function showAllProduct(arrIn) {
  return arrIn;
}

console.log(showAllProduct(listProducts));

// 4

function findProductCtg(arrIn, categoryIn) {
  const category = arrIn.filter((el) => el.category === categoryIn);
  return category;
}

console.log(findProductCtg(listProducts, "COMPUTER"));

// 5

function totalProduct(arrIn) {
  const totalHarga = arrIn.reduce((sum, el) => sum + el.subTotal, 0);
  return totalHarga;
}

console.log(totalProduct(listProducts));

// 6

function totalTagihan(arrIn, discount) {
  const itemFilter = arrIn.filter((el) => el.jumlahBeli > 1);
  const totalDisc = itemFilter.reduce(
    (sum, el) => sum + el.subTotal * ((100 - discount) / 100) ,0);
  return totalDisc;
}

console.log(totalTagihan(listProducts, 10));

console.log();
