import {User} from './user';
import {Menu} from '../Menu';

export class Chef extends User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  menu: Menu = new Menu();
  rating: string;
  token: string;
}
