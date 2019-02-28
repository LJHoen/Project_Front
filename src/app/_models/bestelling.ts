import { Dish } from './dish';

export class Bestelling {
  besteller: String;
  id: number;
  dishes: Dish[] = new Array<Dish>();
  dishCount: number[] = [];
  price: number;

  constructor(id: number, dishes: Dish[], dishCount: number[], price: number) {
    this.id = id;
    this.dishes = dishes;
    this.price = price;
  }
}
