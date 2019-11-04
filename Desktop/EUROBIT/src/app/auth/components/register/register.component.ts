import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.username, this.password).subscribe (
      res => {
        console.log('uspjesna registracija');
        console.log(res);
        localStorage.setItem('token', res.token);  // U slucaju uspjeha pohrani 'token' u localStorage //
      },
      error1 => console.log('neuspjesna registracija' + error1)
    );
    this.gotoHome();
  }

  gotoHome() {
    this.router.navigate(['']);
  }
}
