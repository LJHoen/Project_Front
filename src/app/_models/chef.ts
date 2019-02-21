import {User} from './user';
import {Dish} from './dish';

export class Chef extends User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  dishes: Dish[] = [];
  rating: string;
  token: string;
}
