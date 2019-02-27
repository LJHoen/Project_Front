import {User} from './user';
import {Dish} from './dish';
import {Bestelling} from './bestelling';

export class Chef extends User {
  dishes: Dish[] = [];
  bestellingen: Bestelling[] = [];
  rating: number;
  votes: number;
}
