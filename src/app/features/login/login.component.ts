import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  corpId!: string;
  password!: string;
  wrongCreds = false;

  onSubmit(login: any) {
    console.log(login);

    console.log('submitted');

    this.authService.login(this.corpId, this.password);
    if (this.authService.isLoggedIn) this.router.navigateByUrl('home');
    else this.wrongCreds = true;
  }
}
