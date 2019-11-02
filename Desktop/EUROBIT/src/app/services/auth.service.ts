import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGIN_API = '/api/login';

  constructor(private http: HttpClient ) { }


  authenticate(username: string, password: string): Observable<any> {
    const credentials = {username, password };
    return this.http.post(this.LOGIN_API, credentials);

  }
}
