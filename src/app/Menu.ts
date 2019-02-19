
export class Menu {

  id: Number = 0;
  name: String;
  price: PaymentCurrencyAmount;
  description: String;
  serveTime: String;


  constructor(id: Number, name: String, price: PaymentCurrencyAmount, description: String, serveTime: String) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.serveTime = serveTime;
  }
}
