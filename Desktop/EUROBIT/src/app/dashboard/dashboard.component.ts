import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
      this.authService.logOut();
      this.gotoHome();
      window.alert('Izlogovani ste');
  }

  gotoHome() {
    this.router.navigate(['']);
  }
}
