import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {
  user;

  constructor(private userService: UserService) {
    this.user = this.userService.get();
  }

  ngOnInit() {
  }

}
