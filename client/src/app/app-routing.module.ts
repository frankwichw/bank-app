import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
// importing route guard
import { AuthGuard } from './services/login-route-guard';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: 'profile', 
    // canActivate: [AuthGuard],
    component: AccountPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
