import {Component, OnInit} from '@angular/core';
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
    this.authService.register(this.username, this.password).subscribe(
      () => {
        console.log('Uspjesno ste se registrovali');
        this.gotoLogin();
      },
      error => console.error(error.error)
    );
  }

  gotoLogin() {
    this.router.navigate(['login']);
  }
}
