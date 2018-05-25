import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './biz/home/home.component';
import { LoginComponent } from './core/login/login.component';

import { AuthGuard } from './core/guard/auth.guard';

const APP_ROUTES: Routes = [
  { path: 'login',
      component: LoginComponent },
  { path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard]},
  { path: '',
      component: HomeComponent,
      canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
