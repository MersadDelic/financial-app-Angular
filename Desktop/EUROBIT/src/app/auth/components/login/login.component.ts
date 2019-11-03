import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
   this.authService.authenticate(this.username, this.password).subscribe (
    res => {
      console.log('uspjesan login');
      console.log(res);
      localStorage.setItem('token', res.token);  // U slucaju uspjeha pohrani 'token' u localStorage //
    },
      error1 => console.log('neuspjesan login' + error1)
  );
   this.gotoHome();
  }

  gotoHome() {
    this.router.navigate(['']);
  }
}
