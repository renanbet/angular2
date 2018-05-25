import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showProfileMenu = true;
  constructor(private router: Router) {  }

  ngOnInit() {
  }

  navigate = (link) => {
    switch (link){
      case 'home':
        this.router.navigateByUrl('');
        break;
      default:
        break;
    }
  }

}
