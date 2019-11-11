import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.authenticate(this.username, this.password).subscribe(
      res => {
        this.gotoDashboard();
        // console.log('uspjesan login');
        this.toastr.success('You have successfully logged in...', 'Login');
        console.log(res);
        localStorage.setItem('token', res.token);  // U slucaju uspjeha pohrani 'token' u localStorage //
        localStorage.setItem('login', this.username);
      },
      error1 => {
        console.log('neuspjesan login' + error1);
        this.toastr.error('Wrong username or password!', 'Login');
      }
    );

  }

  gotoDashboard() {
    this.router.navigate(['dashboard']);
  }
}
