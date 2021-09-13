import Product from "../../day05/Solution/Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "Dell Ultrabook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "Iphone 12", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

const listProd = [prod1, prod2, prod3, prod4, prod5];

const getProduct = (priceIn) => {
  return listProd.filter((el) => el.price > priceIn);
};

let result = listProd.map(el => el.prodName);

// console.log(getProduct(3500000));


console.log();
// const now = new Date()
// console.log(`${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`);
