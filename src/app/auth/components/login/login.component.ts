import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormData = {
    email: '',
    password: '',
    remember: true
  }

  constructor(
    private authService: AuthService
  ) {}

  onSubmit() {
    this.authService.login(this.loginFormData).subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log(err.error.msg);
    });
  }
}
