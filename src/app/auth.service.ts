import { Injectable } from '@angular/core';
import { User } from './models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  validUsers: User[] = [
    new User('a720856', 'Eshaan', 'asdf'),
    new User('a722956', 'Ron', 'qwer'),
    new User('a390856', 'Gracy', 'zxcv'),
  ];

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  login(cid: string, passHash: string) {
    this.isLoggedIn = false;
    console.log(cid, passHash);

    this.validUsers.forEach((user: User) => {
      if (user.corpId == cid && user.passHash == passHash) {
        this.isLoggedIn = true;
      }
    });

    /*invalid:
    console.log(
      this.validUsers.forEach((user) => {
        return user;
      })
      
    );
    */
  }
  logout() {
    this.isLoggedIn = false;
  }
}
