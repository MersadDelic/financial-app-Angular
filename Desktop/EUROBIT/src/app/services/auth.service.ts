import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGIN_API = '/api/login';
  private REGISTER_API = '/api/register';

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {

    this.isLoggedIn();
  }


  authenticate(username: string, password: string): Observable<any> {
    const credentials = {username, password};
    return this.http.post(this.LOGIN_API, credentials);
  }

  register(username: string, password: string): Observable<any> {
    const credentials = {username, password};
    return this.http.post(this.REGISTER_API, credentials);
  }

  assignBeneficiaryToBudget(budgetId: number, username: string): Observable<any> {
    return this.http.put(`http://ebit-front-test.herokuapp.com/budget/${budgetId}/beneficiary`, username);
  }

  logOut() {
    localStorage.clear();
  }

  isLoggedIn(): boolean {

    const token = localStorage.getItem('token');

    if (token == null) { // ako ne postoji token, vrati false
      return false;  /*ovdje vraca false i ne ide vise dalje*/
    }

    return !this.jwtHelper.isTokenExpired(token);
  }
}
