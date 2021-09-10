// quiz class

export default class Product {
  constructor(prodId, prodName, category='', price=0, jumlahBeli=0, subTotal=0) {
    this.prodId = prodId;
    this.prodName = prodName;
    this.category = category;
    this.price = price;
    this.jumlahBeli = jumlahBeli;
    this.subTotal = jumlahBeli * price;
  }

  showAllProduct() {
    return `
Id        : ${this.prodId}
Nama      : ${this.prodName}
Category  : ${this.category}
Price     : ${this.price}
Jumlah    : ${this.jumlahBeli}
SubTotal  : ${this.subTotal}
`;
  }
}
