import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Profile } from '../user/profile/profile';
import { authGuard } from '../core/guards';

const routes: Routes = [
  {
    path: '',
    component: Profile,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
