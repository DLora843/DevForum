import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Login } from '../features/auth/login/login';
import { Register } from '../features/auth/register/register';

const routes: Routes = [
  { path: '', component: Home },
  { path: '', component: Login },
  { path: '', component: Register },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
