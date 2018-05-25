import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserService } from './user/user.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [NavbarComponent, SidebarComponent, ProfileMenuComponent, LoginComponent],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ProfileMenuComponent,
  ],
  providers: [UserService]
})
export class CoreModule { }
