import { Dish } from '../_models';

export class Order {
  id: number;
  dishes: Dish[] = [];
  price: number;
}
