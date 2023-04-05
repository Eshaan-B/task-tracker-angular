import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
