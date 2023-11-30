import { Injectable } from '@angular/core';
import { User } from '../app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      id: 1,
      email: 'chiara@chiara.com',
      nome: 'Chiara',
      ruolo: 'user',
    },
    {
      id: 2,
      email: 'andrea@andrea.com',
      nome: 'Andrea',
      ruolo: 'admin',
    },
    {
      id: 3,
      email: 'francesco@francesco.com',
      nome: 'Francesco',
      ruolo: 'user',
    },
    {
      id: 4,
      email: 'lorenzo@lorenzo.com',
      nome: 'Lorenzo',
      ruolo: 'admin',
    },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    let singleUser = this.users.find((user) => user.id == id);
    return singleUser;
  }
}
