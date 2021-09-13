export default class Product {
  constructor(prodId, prodName, category, price = 0, jmlBeli = 1) {
    this.prodId = prodId;
    this.prodName = prodName;
    this.category = category;
    this.price = price;
    this.jmlBeli = jmlBeli;
    this.subTotal = this.jmlBeli * this.price;
  }

  setPrice(price) {
    this.price = price;
    return (this.subTotal = this.price * this.jmlBeli);
  }

  setPriceJmlBeli(price, jmlBeli) {
    this.price = price;
    this.jmlBeli = jmlBeli;
    return (this.subTotal = this.price * this.jmlBeli);
  }

  toString() {
    return `
      prodId=${this.prodId}
      prodName=${this.prodName}
      category=${this.category}`;
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
