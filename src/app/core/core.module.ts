import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { UserService } from './user/user.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule
  ],
  declarations: [NavbarComponent, SidebarComponent, ProfileMenuComponent],
  exports: [NavbarComponent, SidebarComponent, ProfileMenuComponent],
  providers: [UserService]
})
export class CoreModule { }
