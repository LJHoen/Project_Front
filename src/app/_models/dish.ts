export class Dish {
  id: number;
  name: String;
  price: number;
  description: String;
  serveTime: String;
  listed: boolean;
  creator: number;

  constructor(id: number, name: String, price: number, description: String, serveTime: String, listed: boolean, creator: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.serveTime = serveTime;
    this.listed = listed;
    this.creator = creator;
  }
}
