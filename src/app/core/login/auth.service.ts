import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged: boolean = false;

  constructor() { }

  isAuthenticated() {
    return this.logged;
  }

  login(username, password) {
    if(username === 'admin' && password === 'admin' ) {
      this.logged = true;
      return true;
    }
    this.logged = false;
    return false;
  }

  logout() {
    this.logged = false;
  }
}
