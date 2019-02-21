import {User} from './user';
import {Order} from './order';
import {Dish} from './dish';

export class Customer extends User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  currentOrder: Dish[] = [];
  history: Dish[][] = [];
  token: string;
}
