import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [{
	path: 'auth',
	component: AuthComponent,
	children: [{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	}, {
		path: 'login',
		component: LoginComponent
	}, {
		path: 'register',
		component: RegisterComponent
	}, {
		path: 'forgot-password',
		component: ForgotPasswordComponent
	}]
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
  	LoginComponent,
  	RegisterComponent,
  	ForgotPasswordComponent,
  	AuthComponent
  ]
})
export class AuthModule { }
