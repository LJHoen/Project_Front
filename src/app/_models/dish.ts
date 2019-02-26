export class Dish {
  id: Number = 0;
  name: String;
  price: number;
  description: String;
  serveTime: String;
  listed: boolean;
  creator: string;

  constructor(id: Number, name: String, price: number, description: String, serveTime: String, listed: boolean, creator: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.serveTime = serveTime;
    this.listed = listed;
    this.creator = creator;
  }
}
