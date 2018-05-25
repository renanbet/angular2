import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  get() {
    let user = {
      name: 'nome do usuario',
      email: 'email@google.com',
      image: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    };
    return user;
  }
}
