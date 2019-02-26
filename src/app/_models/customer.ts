import {User} from './user';
import {Order} from './order';

export class Customer extends User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  current: Order = new Order();
  history: Order[];
  token: string;
}
