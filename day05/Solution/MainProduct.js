import Product from "./Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);

// prod1.price =1000;

// console.log(prod1.setPrice(1000));
console.log(prod1.setPriceJmlBeli(2000, 5));

const prod2 = new Product(2, "Dell Ultrabook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "Iphone", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

// declare listcart
let listCart = [];

// function add product
function addToCart(product) {
  listCart = [...listCart, product];
  return product;
}

addToCart(prod1)
addToCart(prod2)
addToCart(prod3)
addToCart(prod4)
addToCart(prod5)

// insert product to array listcart
/* listCart = [...listCart,prod1];
listCart = [...listCart,prod2];
listCart = [...listCart,prod3];
listCart = [...listCart,prod4];
listCart = [...listCart,prod5]; */

// display all product
function findAllProduct(array=[]){
    return array;
}

console.log(findAllProduct(listCart));

// anonymous function

(hello)=>{
    console.log(hello);
}

// filter product by category
// const listCategory = listCart.filter((el)=>el.category === "HP");

function listProdCategory (category) {
    return listCart.filter((el)=> el.category === category);
}

console.log(listProdCategory("HP"))

// menghitung total by subtotal

const totalTagihan = listCart.reduce((sum,val)=> sum + val.subTotal, 0)
console.log(`Total Tagihan = ${totalTagihan}`);

// subTotal discount if jmlBarang lebih dari 1
// rumus discount = price - (price * discount%)
// rumus disc 2   = price * (100% - discount%)
const subTotalDiscount = listCart.reduce((sum,val) =>{
    if(val.jmlBeli > 1){
        return sum + (val.subTotal - (val.subTotal * 10/100));
    }else{
        return sum + val.subTotal;
    }
},0)

console.log(`Total tagihan + discount = ${subTotalDiscount}`);

// reduce (param1,param2), param1 = anonymous function, param2 = initial value

// menggunakan ternary operation
const subTotalDiscount2 = listCart.reduce((sum,val) => 
    (val.jmlBeli > 1) ? sum + (val.subTotal * ((100-10)/100)) : sum + val.subTotal,0)

console.log(`Total tagihanDisc2 = ${subTotalDiscount2}`);

// ternary in ternary
const subTotalDiscount3 = listCart.reduce((sum,val) => 
    (val.jmlBeli > 1) ? 
    sum + (val.subTotal * ((100-10)/100)) 
    : (sum + val.subTotal > 1000000) ? sum + (val.subTotal - 5000) : sum + val.subTotal ,0)

console.log(`Total TagihanDisc3 = ${subTotalDiscount3}`);


console.log(prod1.toString());

console.log();
