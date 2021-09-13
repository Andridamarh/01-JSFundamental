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

const createOrder = (nomor) => {
  const now = new Date();
  return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}#${nomor}`;
};

const payment = (pay) => {
  if (pay === "BCA") {
    return `pay with BCA`;
  } else if (pay === "Shopee Pay") {
    return `pay with Shopee Pay`;
  } else if (pay === "OVO") {
    return `pay with OVO`;
  } else {
    return `cash payment`;
  }
};


const displayTagihan = async (price, nomor, pay) => {
  const [prodPrice, orderFormat, payType] = await Promise.all([
    getProduct(price),
    createOrder(nomor),
    payment(pay),
  ]);
  return [prodPrice, orderFormat, payType];
};

displayTagihan(3000000, "0001", "OVO").then((res) => console.log(res));
console.log();
