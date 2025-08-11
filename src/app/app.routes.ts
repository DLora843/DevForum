import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(c => c.Home),
    data: { animation: 'HomePage'}
  },
  {
    path: 'catalog',
    loadComponent: () => import('./pages/catalog/catalog').then(c => c.Catalog),
    data: { animation: 'CatalogPage'}
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./pages/details/details').then(c => c.Details),
    data: { animation: 'DetailsPage'}
  },
  {
    path: 'create',
    loadComponent: () => import('./pages/create/create').then(c => c.Create),
    data: { animation: 'CreatePage'}
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(c => c.Login),
    data: { animation: 'LoginPage'}
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register').then(c => c.Register),
    data: { animation: 'RegisterPage'}
  },
  {
    path: 'profile',
    loadComponent: () => import('./user/profile/profile').then(c => c.Profile),
    data: { animation: 'ProfilePage'}
  },
];