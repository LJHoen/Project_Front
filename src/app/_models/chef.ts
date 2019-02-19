import {User} from './user';

export class Chef extends User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  rating: string;
  token: string;
}
