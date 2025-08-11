import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(c => c.Home)
  },
  {
    path: 'catalog',
    loadComponent: () => import('./pages/catalog/catalog').then(c => c.Catalog)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./pages/details/details').then(c => c.Details)
  },
  {
    path: 'create',
    loadComponent: () => import('./pages/create/create').then(c => c.Create)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(c => c.Login)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register').then(c => c.Register)
  },
  {
    path: 'profile',
    loadComponent: () => import('./user/profile/profile').then(c => c.Profile)
  },
];
