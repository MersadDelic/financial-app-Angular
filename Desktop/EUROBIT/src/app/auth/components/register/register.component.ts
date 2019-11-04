import { Component, OnInit } from '@angular/core';
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
        this.gotoHome();
        console.log('Success');
        console.log(res);
        window.alert('Uspješno ste se registrovali');
      },
      error => console.log('User already exists' + error.error.text)
    );

  }

  gotoHome() {
    this.router.navigate(['']);
  }
}
